
const ME = ["Pathak S. Parashar", "P. Shubham Parashar", "Pathak Shubham Parashar"];
const publications = [
  {authors:["P. Shubham Parashar","M. M. Fogler"], title:"Hydrodynamic and diffusive magneto-transport near a density perturbation in a two-dimensional electron gas", venue:"in preparation", year:2025, tags:["hydrodynamic","magnetotransport","2DEG"]},
  {authors:["Z. J. Krebs","W. A. Behn","K. J. Smith","M. A. Fortman","K. Watanabe","T. Taniguchi","Pathak S. Parashar","M. M. Fogler","V. W. Brar"], title:"Imaging diffusive-to-ballistic crossover of magnetotransport in graphene", venue:"in preparation", year:2025, tags:["graphene","ballistic","diffusive","magnetotransport"]},
  {authors:["Pathak S. Parashar","D. P. Arovas","M. M. Fogler"], title:"Thermodynamics of the spin-splitting transition in quantum Hall effect", venue:"in preparation", year:2025, tags:["quantum Hall","spin-splitting","thermodynamics"]},
  {authors:["Zi Cai","Pathak S. Parashar","Congjun Wu"], title:"Symplectic ferromagnetism and phase transitions in multi-component fermionic systems", venue:"in preparation", year:2025, tags:["symplectic","ferromagnetism","multicomponent"]},
];
function highlightMe(n){return ME.map(x=>x.toLowerCase()).includes((n||"").toLowerCase())?`<span class="me">${n}</span>`:n}
function fmtAuthors(a){return (a||[]).map(highlightMe).join(", ")}
function matches(p,f){if(!f)return true;const s=[p.title,p.venue,String(p.year),(p.tags||[]).join(" "),(p.authors||[]).join(" ")].join(" ").toLowerCase();return s.includes(f.toLowerCase())}
function renderPubs(f=""){const list=document.getElementById("pubList"); if(!list) return; list.innerHTML=""; publications.filter(p=>matches(p,f)).sort((a,b)=>b.year-a.year).forEach(p=>{const el=document.createElement("article"); el.className="pub"; el.innerHTML=`<div><strong>${p.title}</strong> <small>(${p.year})</small></div><div class="authors">${fmtAuthors(p.authors)}</div><div class="muted">${p.venue}</div>`; list.appendChild(el)});}
document.addEventListener("DOMContentLoaded",()=>{
  const ps=document.getElementById("pubSearch"); if(ps){ renderPubs(); ps.addEventListener("input",e=>renderPubs(e.target.value)) }
  const y=document.getElementById("year"); if(y) y.textContent=new Date().getFullYear();
  const u=document.getElementById("updated"); if(u) u.textContent=new Date().toISOString().slice(0,10);
  const progress=document.getElementById("progress"); const toTop=document.getElementById("toTop");
  window.addEventListener("scroll",()=>{const h=document.documentElement; const s=h.scrollTop/(h.scrollHeight-h.clientHeight); if(progress) progress.style.transform=`scaleX(${s})`; if(toTop) toTop.classList.toggle("show",h.scrollTop>900)});
});
