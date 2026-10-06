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
  function codeMatches(code, query) {
    const value = normalize(code); const term = normalize(query);
    if (value.includes(term)) return true;
    return value.split(',').some(part => {
      if (part.endsWith('*')) return term.startsWith(part.slice(0, -1));
      const range = part.match(/^([A-Z]?)([0-9A-F]+)-([A-Z]?)([0-9A-F]+)$/);
      const input = term.match(/^([A-Z]?)([0-9A-F]+)$/);
      if (!range || !input || input[1] !== range[1] || (range[3] && range[3] !== range[1])) return false;
      const radix = /[A-F]/.test(range[2] + range[4]) ? 16 : 10;
      const number = parseInt(input[2], radix);
      return !Number.isNaN(number) && number >= parseInt(range[2], radix) && number <= parseInt(range[4], radix);
    });
  }
  function render() {
    if (!loaded) return;
    const query = search.value.trim();
    const matches = rows.filter(row => !query || codeMatches(row.errorCode, query) || row.errorMeaning.toLowerCase().includes(query.toLowerCase()));
    matches.sort((a, b) => Number(normalize(b.errorCode) === normalize(query)) - Number(normalize(a.errorCode) === normalize(query)));
    results.replaceChildren();
    const fragment = document.createDocumentFragment();
    for (const row of matches) {
      const card = document.createElement('article'); card.className = 'result';
      const heading = document.createElement('h2'); heading.textContent = 'Error code: ' + row.errorCode;
      const meaning = document.createElement('p'); meaning.textContent = row.errorMeaning;
      const remedy = document.createElement('p'); remedy.textContent = 'Possible solution: ' + (row.possibleSolution || 'No remedy provided in this source manual.');
      card.append(heading, meaning, remedy); fragment.append(card);
    }
    results.append(fragment);
    status.textContent = !rows.length ? 'No error-code list is available in this source. Use the manual links above.' : !matches.length ? 'No matching error codes. Try another code or fault description.' : matches.length + ' matching code' + (matches.length === 1 ? '' : 's') + ' · ' + rows.length + ' available';
  }
  async function load() {
    const version = ++loadVersion; const source = config.models[Number(model.value)];
    loaded = false; rows = []; results.replaceChildren(); retry.hidden = true;
    status.textContent = 'Loading error codes…';
    document.getElementById('source-note').textContent = source.note || '';
    const links = document.getElementById('manual-links'); links.replaceChildren();
    source.manuals.forEach(item => { const a = document.createElement('a'); a.href = item.url; a.textContent = item.label; a.target = '_blank'; a.rel = 'noopener'; links.append(a); });
    try {
      let data = cache.get(source.json);
      if (!data) {
        const response = await fetch(source.json);
        if (!response.ok) throw new Error('HTTP ' + response.status);
        const json = await response.json();
        if (!Array.isArray(json['Error Codes'])) throw new Error('Invalid code list');
        data = json['Error Codes'].map(row => {
          if (typeof row.errorCode !== 'string' || typeof row.errorMeaning !== 'string') throw new Error('Invalid code entry');
          return {errorCode: row.errorCode, errorMeaning: row.errorMeaning, possibleSolution: typeof row.possibleSolution === 'string' ? row.possibleSolution : ''};
        });
        cache.set(source.json, data);
      }
      if (version !== loadVersion) return;
      rows = data; loaded = true; render();
    } catch (error) {
      if (version !== loadVersion) return;
      status.textContent = 'Could not load error codes. Please retry or open the source manual.';
      retry.hidden = false;
    }
  }
  model.addEventListener('change', load);
  search.addEventListener('input', render);
  document.getElementById('clear').addEventListener('click', () => { search.value = ''; render(); search.focus(); });
  retry.addEventListener('click', load);
  load();
})();
