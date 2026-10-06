(function(root){
'use strict';
const base=typeof document!=='undefined'?new URL('.',document.currentScript.src):null;
const url=path=>base?new URL(path.replace(/^\.\.\//,''),base).href:path;
let catalogPromise;const codeCache=new Map();
const normalize=v=>String(v).toUpperCase().replace(/\s+/g,'');
function codeMatches(code,query){const value=normalize(code),term=normalize(query);if(value.includes(term))return true;return value.split(',').some(part=>{if(part.endsWith('*'))return term.startsWith(part.slice(0,-1));const r=part.match(/^([A-Z]?)([0-9A-F]+)-([A-Z]?)([0-9A-F]+)$/),i=term.match(/^([A-Z]?)([0-9A-F]+)$/);if(!r||!i||i[1]!==r[1]||(r[3]&&r[3]!==r[1]))return false;const b=/[A-F]/.test(r[2]+r[4])?16:10,n=parseInt(i[2],b);return n>=parseInt(r[2],b)&&n<=parseInt(r[4],b);});}
function flatten(items){return items.flatMap(row=>Array.isArray(row.codes)?flatten(row.codes):[row]);}
function normalizeRows(data,source){if(!Array.isArray(data['Error Codes']))throw Error('Invalid source');return flatten([...data['Error Codes'],...(data.Troubleshooting||[])]).map((row,i)=>{if(typeof row.errorCode!=='string'||typeof row.errorMeaning!=='string')throw Error('Invalid code row');return {...row,possibleSolution:row.possibleSolution||'',rowId:source.id+':'+i,sourceId:source.id,brand:source.brand,model:source.label,source};});}
function load(){if(!catalogPromise)catalogPromise=fetch(url('JSON/assistant-sources.json')).then(r=>{if(!r.ok)throw Error('Source list unavailable');return r.json();}).catch(e=>{catalogPromise=null;throw e;});return catalogPromise;}
async function sources(){return (await load()).flatMap(b=>b.models);}
async function codes(source){if(!codeCache.has(source.id))codeCache.set(source.id,fetch(url(source.json)).then(r=>{if(!r.ok)throw Error('Code source unavailable');return r.json();}).then(d=>normalizeRows(d,source)).catch(e=>{codeCache.delete(source.id);throw e;}));return codeCache.get(source.id);}
async function search(query){if(!query.trim())return {rows:[],failed:[],sources:0};const list=await sources(),results=await Promise.allSettled(list.map(codes));let rows=[],failed=[];results.forEach((r,i)=>{if(r.status==='rejected')failed.push(list[i].label);else rows.push(...r.value.filter(row=>codeMatches(row.errorCode,query)||row.errorMeaning.toLowerCase().includes(query.toLowerCase())));});rows.sort((a,b)=>Number(normalize(b.errorCode)===normalize(query))-Number(normalize(a.errorCode)===normalize(query)));return {rows,failed,sources:list.length};}
function citation(row){const s=row.source,ref=s.codePages?.[row.errorCode];const m=ref?s.manuals.find(m=>m.id===ref.manualId):s.manuals[0];return m?{label:ref?'Source PDF · page '+ref.page:'Source PDF',url:url(m.url)+(ref?'#page='+ref.page:''),sourceId:s.id}:null;}
const api={url,load,sources,codes,search,codeMatches,normalizeRows,citation};if(typeof module!=='undefined')module.exports=api;else root.PumpSources=api;
})(typeof window!=='undefined'?window:globalThis);
