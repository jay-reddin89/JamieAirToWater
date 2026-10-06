'use strict';
(() => {
  const config = JSON.parse(document.getElementById('pump-config').textContent);
  const model = document.getElementById('model');
  const search = document.getElementById('search');
  const results = document.getElementById('results');
  const status = document.getElementById('status');
  const retry = document.getElementById('retry');
  const cache = new Map();
  let rows = []; let loadVersion = 0; let loaded = false;
  config.models.forEach((item, i) => model.add(new Option(item.label, String(i))));
  const normalize = value => value.toUpperCase().replace(/\s+/g, '');
  const codeMatches = PumpSources.codeMatches;
  function render() {
    if (!loaded) return;
    const query = search.value.trim();
    if (!query) { results.replaceChildren(); results.hidden = true; status.hidden = true; return; }
    status.hidden = false;
    const matches = rows.filter(row => !query || codeMatches(row.errorCode, query) || row.errorMeaning.toLowerCase().includes(query.toLowerCase()));
    matches.sort((a, b) => Number(normalize(b.errorCode) === normalize(query)) - Number(normalize(a.errorCode) === normalize(query)));
    results.replaceChildren();
    const fragment = document.createDocumentFragment();
    for (const row of matches) {
      const card = document.createElement('article'); card.className = 'result';
      const heading = document.createElement('h2'); heading.textContent = 'Error Code: '; const code = document.createElement('span'); code.className = 'code'; code.textContent = row.errorCode; heading.append(code);
      const meaning = document.createElement('p'); meaning.textContent = 'Meaning: ' + row.errorMeaning;
      const remedy = document.createElement('p'); remedy.textContent = 'Solution: ' + (row.possibleSolution || 'No remedy provided in this source manual.');
      card.append(heading, meaning, remedy); fragment.append(card);
    }
    results.append(fragment); results.hidden = !matches.length; status.hidden = matches.length > 0;
    status.textContent = !rows.length ? 'No error-code list is available in this source. Open PDF Files for the source manual.' : !matches.length ? 'No matching error codes. Try another code or fault description.' : matches.length + ' matching code' + (matches.length === 1 ? '' : 's') + ' · ' + rows.length + ' available';
  }
  async function load() {
    const version = ++loadVersion; const source = config.models[Number(model.value)];
    loaded = false; rows = []; results.replaceChildren(); retry.hidden = true;
    results.hidden = true; status.hidden = !search.value.trim(); status.textContent = 'Loading error codes…';
    document.getElementById('source-note').textContent = source.note || '';
    const links = document.getElementById('manual-links'); links.replaceChildren();
    const manuals = [...new Map(config.models.flatMap(item => item.manuals).map(item => [item.url, item])).values()];
    manuals.forEach(item => { const a = document.createElement('a'); a.href = item.url; a.textContent = item.label; a.target = '_blank'; a.rel = 'noopener'; links.append(a); });
    try {
      let data = cache.get(source.json);
      if (!data) {
        const registered = (await PumpSources.sources()).find(item => item.json === source.json.replace(/^\.\.\//, ''));
        if (!registered) throw new Error('Unknown source');
        data = (await PumpSources.codes(registered)).map(row => ({...row, errorMeaning: row.error ? row.error + ' — ' + row.errorMeaning : row.errorMeaning}));
        cache.set(source.json, data);
      }
      if (version !== loadVersion) return;
      rows = data; loaded = true; render();
    } catch (error) {
      if (version !== loadVersion) return;
      status.hidden = false; status.textContent = 'Could not load error codes. Please retry or open the source manual.';
      retry.hidden = false;
    }
  }
  model.addEventListener('change', load);
  search.addEventListener('input', () => { if (loaded) render(); else status.hidden = !search.value.trim(); });
  const dialog = document.getElementById('pdf-dialog');
  const pdfButton = document.getElementById('pdf-button');
  pdfButton.addEventListener('click', () => dialog.showModal());
  document.getElementById('pdf-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) { const box = dialog.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close(); } });
  dialog.addEventListener('close', () => pdfButton.focus());
  retry.addEventListener('click', load);
  load();
})();
