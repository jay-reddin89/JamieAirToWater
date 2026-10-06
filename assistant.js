'use strict';
(() => {
  const el = id => document.getElementById(id);
  const brand = el('brand'), model = el('model'), log = el('conversation'), question = el('question');
  let brands = [], version = 0; const cache = new Map();
  function paragraph(parent, text, className) { const p = document.createElement('p'); p.textContent = text; if (className) p.className = className; parent.append(p); return p; }
  function message(text, user = false) { const article = document.createElement('article'); article.className = 'message ' + (user ? 'user' : 'assistant'); if (text) paragraph(article, text); log.append(article); return article; }
  function current() { return brand.value === '' ? null : brands[Number(brand.value)].models[Number(model.value)]; }
  function reset() { version++; log.replaceChildren(); message('Select your brand and model, then enter an error code or describe the fault. Answers use only the selected source.'); el('status').textContent = ''; el('send').disabled = false; }
  function updateManuals() {
    const source = current(); el('source-note').textContent = source?.note || ''; const links = el('manual-links'); links.replaceChildren();
    const sources = brand.value === '' ? [] : brands[Number(brand.value)].models;
    const manuals = [...new Map(sources.flatMap(s => s.manuals).map(m => [m.url, m])).values()];
    for (const manual of manuals) { const a = document.createElement('a'); a.href = manual.url; a.textContent = manual.label; a.target = '_blank'; a.rel = 'noopener'; links.append(a); }
    if (!manuals.length) paragraph(links, 'Select a brand to see its manuals. You can also browse all manuals below.');
  }
  brand.addEventListener('change', () => { reset(); model.replaceChildren(); model.disabled = brand.value === ''; if (brand.value !== '') brands[Number(brand.value)].models.forEach((s,i) => model.add(new Option(s.label, String(i)))); else model.add(new Option('Select a brand first', '')); updateManuals(); });
  model.addEventListener('change', () => { reset(); updateManuals(); });
  el('clear-chat').addEventListener('click', () => { reset(); question.value = ''; question.focus(); });
  const dialog = el('pdf-dialog'); el('pdf-button').addEventListener('click', () => dialog.showModal()); el('pdf-close').addEventListener('click', () => dialog.close()); dialog.addEventListener('close', () => el('pdf-button').focus());
  dialog.addEventListener('click', event => { if (event.target !== dialog) return; const box = dialog.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close(); });
  function codeMatch(code, token) {
    const value = code.toUpperCase().replace(/\s/g, ''); const term = token.toUpperCase();
    return value === term || value.split(',').some(part => {
      if (part.endsWith('*')) return term.startsWith(part.slice(0,-1));
      const range = part.match(/^([A-Z]?)([0-9A-F]+)-([A-Z]?)([0-9A-F]+)$/), input = term.match(/^([A-Z]?)([0-9A-F]+)$/);
      if (!range || !input || input[1] !== range[1] || (range[3] && range[3] !== range[1])) return false;
      const base = /[A-F]/.test(range[2]+range[4]) ? 16 : 10, n = parseInt(input[2],base);
      return n >= parseInt(range[2],base) && n <= parseInt(range[4],base);
    });
  }
  function findMatches(rows, text) {
    const tokens = text.toUpperCase().match(/[A-Z0-9]+(?:[.-][A-Z0-9]+)*/g) || [];
    const codeTokens = tokens.filter(t => /\d/.test(t));
    if (codeTokens.length) return rows.filter(r => codeTokens.some(t => codeMatch(r.errorCode,t))).sort((a,b) => Number(codeTokens.includes(b.errorCode.toUpperCase()))-Number(codeTokens.includes(a.errorCode.toUpperCase())));
    const stop = new Set('the a an is are my it not and or with for has have pump heat heating error fault code help please working water'.split(' '));
    const words = [...new Set(text.toLowerCase().match(/[a-z]+/g) || [])].filter(w => w.length > 2 && !stop.has(w));
    const ranked = rows.map(row => ({row, score:words.filter(w => row.errorMeaning.toLowerCase().includes(w)).length})).filter(x => x.score >= Math.min(2, words.length) && x.score > 0).sort((a,b)=>b.score-a.score);
    return ranked.slice(0,5).map(x=>x.row);
  }
  function pageFor(source, code) {
    if (source.json.includes('grant-aerona3-r32')) { if (/^A[0-4]$/.test(code)) return 55; if (/^A[5-8]$|^C[1-7]$/.test(code)) return 56; if (/^C8$|^E[45]$|^FU$|^P[13]$|^U1$/.test(code)) return 57; return 58; }
    if (source.json.includes('samsung')) return Number(code.slice(1)) >= 912 ? 20 : 19;
    if (source.json.includes('daikin')) return {'7H':9,'AA-01':20,'89-10':34}[code];
    return source.pages?.length === 1 ? source.pages[0] : null;
  }
  el('ask-form').addEventListener('submit', async event => {
    event.preventDefault(); const text = question.value.trim(); if (!text || el('send').disabled) return;
    message(text,true); question.value = ''; const source = current();
    if (!source) { message('Which brand and model is this? Select them above so I can search the correct source.'); brand.focus(); return; }
    const requestVersion = version; el('send').disabled = true; el('status').textContent = 'Checking the selected source…';
    try {
      let rows = cache.get(source.json);
      if (!rows) { const response = await fetch(source.json); if (!response.ok) throw new Error('Source unavailable'); const data = await response.json(); if (!Array.isArray(data['Error Codes'])) throw new Error('Invalid source'); const flatten = items => items.flatMap(r=>Array.isArray(r.codes)?flatten(r.codes):[r]); rows = flatten([...data['Error Codes'],...(data.Troubleshooting||[])]).filter(r=>typeof r.errorCode === 'string' && typeof r.errorMeaning === 'string'); cache.set(source.json,rows); }
      if (requestVersion !== version) return;
      const matches = findMatches(rows,text); let reply;
      if (!rows.length) reply = message('This selected manual contains no error-code list. I cannot identify a fault from it. What is the indoor-unit model and the exact code on its display? Consult its installation or service manual.');
      else if (!matches.length) reply = message('I could not find a documented match in this source. What is the exact code, including any letters, and what happens when the fault occurs? Check that the selected model/source matches the unit.');
      else {
        const exact = /\d/.test(text); reply = message(exact ? 'The selected source lists the following matches:' : 'These documented entries may relate to the description. A symptom match does not confirm the diagnosis; check the exact code on the display.');
        for (const row of matches.slice(0,8)) { const h = document.createElement('h2'); h.textContent = 'Error code: '+row.errorCode; reply.append(h); paragraph(reply,'Meaning: '+(row.error ? row.error+' — ' : '')+row.errorMeaning); paragraph(reply,'Documented remedy: '+(row.possibleSolution || 'No remedy is provided in this source.')); const page = pageFor(source,row.errorCode); if (source.manuals.length) { const a = document.createElement('a'); a.href = source.manuals.find(m=>m.url.includes('27-52'))?.url || source.manuals[0].url; if (page) a.href += '#page='+page; a.textContent = page ? 'Source PDF · page '+page : 'Source PDF'; a.target = '_blank'; a.rel = 'noopener'; reply.append(a); } }
        if (matches.length > 8) paragraph(reply,'More matches exist. Enter the full code to narrow the result.');
      }
      paragraph(reply,'Source: '+source.label,'source'); if (source.sourceNote) paragraph(reply,source.sourceNote,'source');
      if (!matches.length) for (const m of source.manuals) { const a=document.createElement('a');a.href=m.url;a.textContent=m.label;a.target='_blank';a.rel='noopener';reply.append(a); }
      el('status').textContent = 'Manual lookup complete.';
    } catch (error) { if (requestVersion === version) { message('The source could not be loaded. Please try again, or open PDF Files to consult the manual.'); el('status').textContent = 'Source loading failed.'; } }
    finally { if (requestVersion === version) { el('send').disabled = false; question.focus(); } }
  });
  fetch('../JSON/assistant-sources.json').then(response=>{if(!response.ok)throw new Error();return response.json();}).then(data=>{brands=data; brands.forEach((b,i)=>brand.add(new Option(b.name,String(i)))); updateManuals();}).catch(()=>{el('status').textContent='Could not load brand sources. Refresh the page to retry.';});
})();
