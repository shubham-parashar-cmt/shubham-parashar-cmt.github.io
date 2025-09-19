// === This file needs to be edits constantly, as and when the papers are added ===

// Put all the ways your name might appear so we can highlight it.
const ME = ["Pathak S. Parashar", "P. Shubham Parashar", "Pathak Shubham Parashar"];

// Data model
const publications = [
  {
    authors: ["P. Shubham Parashar", "M. M. Fogler"],
    title: "Hydrodynamic and diffusive magneto-transport near a density perturbation in a two-dimensional electron gas",
    venue: "in preparation",
    year: 2025,
    tags: ["hydrodynamic", "magnetotransport", "2DEG"],
    bibtex: `@unpublished{parashar2025hydrodiff,
  title={Hydrodynamic and diffusive magneto-transport near a density perturbation in a two-dimensional electron gas},
  author={Parashar, P. Shubham and Fogler, M. M.},
  note={in preparation},
  year={2025}
}`
  },
  {
    authors: ["Zachary J. Krebs", "Wyatt A. Behn", "Keenan J. Smith", "Margaret A. Fortman", "Kenji Watanabe", "Takashi Taniguchi", "Pathak S. Parashar", "Michael M. Fogler", "Victor W. Brar"],
    title: "Imaging diffusive-to-ballistic crossover of magnetotransport in graphene",
    venue: "in preparation",
    year: 2025,
    tags: ["graphene", "ballistic", "diffusive", "magnetotransport"],
    bibtex: `@unpublished{krebs2025imaging,
  title={Imaging diffusive-to-ballistic crossover of magnetotransport in graphene},
  author={Krebs, Z. J. and Behn, W. A. and Smith, K. J. and Fortman, M. A. and Watanabe, K. and Taniguchi, T. and Parashar, P. S. and Fogler, M. M. and Brar, V. W.},
  note={in preparation},
  year={2025}
}`
  },
  {
    authors: ["Pathak S. Parashar", "D. P. Arovas", "M. M. Fogler"],
    title: "Thermodynamics of the spin-splitting transition in quantum Hall effect",
    venue: "in preparation",
    year: 2025,
    tags: ["quantum Hall", "spin-splitting", "thermodynamics"],
    bibtex: `@unpublished{parashar2025qhe,
  title={Thermodynamics of the spin-splitting transition in quantum Hall effect},
  author={Parashar, Pathak S. and Arovas, D. P. and Fogler, M. M.},
  note={in preparation},
  year={2025}
}`
  },
  {
    authors: ["Zi Cai", "Pathak S. Parashar", "Congjun Wu"],
    title: "Symplectic ferromagnetism and phase transitions in multi-component fermionic systems",
    venue: "in preparation",
    year: 2025,
    tags: ["symplectic", "ferromagnetism", "multicomponent", "fermions"],
    bibtex: `@unpublished{cai2025symplectic,
  title={Symplectic ferromagnetism and phase transitions in multi-component fermionic systems},
  author={Cai, Z. and Parashar, P. S. and Wu, C.},
  note={in preparation},
  year={2025}
}`
  },
];

// --- rendering helpers ---
function highlightMe(name) {
  const norm = (name || "").replace(/\s+/g, " ").trim().toLowerCase();
  return ME.some(n => n.toLowerCase() === norm)
    ? `<span class="me">${name}</span>`
    : name;
}

function fmtAuthors(list) {
  return list.map(a => highlightMe(a)).join(", ");
}

function matches(p, f) {
  if (!f) return true;
  const hay = [
    p.title,
    p.venue,
    String(p.year),
    p.tags.join(" "),
    ...p.authors
  ].join(" ").toLowerCase();
  return hay.includes(f.toLowerCase());
}

// --- render ---
function renderPubs(filter = "") {
  const pubList = document.getElementById("pubList");
  if (!pubList) return;
  pubList.innerHTML = "";

  publications
    .filter(p => matches(p, filter))
    .sort((a, b) => b.year - a.year)
    .forEach(p => {
      const el = document.createElement("article");
      el.className = "pub";
      el.innerHTML = `
        <div><strong>${p.title}</strong> <small>(${p.year})</small></div>
        <div class="authors">${fmtAuthors(p.authors)}</div>
        <div class="muted">${p.venue}</div>
        <div class="pub-actions">
          <button class="btn mono" data-bib>Copy BibTeX</button>
          ${p.tags?.length ? `<div class="chips" style="margin-top:6px">${p.tags.map(t=>`<span class="chip">${t}</span>`).join("")}</div>` : ""}
        </div>
      `;
      el.querySelector("[data-bib]").addEventListener("click", () => {
        navigator.clipboard.writeText(p.bibtex).then(() => {
          const btn = el.querySelector("[data-bib]");
          const txt = btn.textContent;
          btn.textContent = "Copied!";
          setTimeout(() => (btn.textContent = txt), 1200);
        });
      });
      pubList.appendChild(el);
    });
}

function init() {
  // Publications
  const ps = document.getElementById("pubSearch");
  if (ps) {
    renderPubs();
    ps.addEventListener("input", e => renderPubs(e.target.value));
  }

  // Footer dates
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
  const u = document.getElementById("updated");
  if (u) u.textContent = new Date().toISOString().slice(0, 10);

  // Scroll progress + back-to-top
  const progress = document.getElementById("progress");
  const toTop = document.getElementById("toTop");
  window.addEventListener("scroll", () => {
    const h = document.documentElement;
    const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight);
    if (progress) progress.style.transform = `scaleX(${scrolled})`;
    if (toTop) toTop.classList.toggle("show", h.scrollTop > 900);
  });

  // Active section highlighting
  const navlinks = [...document.querySelectorAll("#navlinks a")];
  const sections = navlinks
    .map(a => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);
  const obs = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        const id = "#" + e.target.id;
        const link = navlinks.find(a => a.getAttribute("href") === id);
        if (link) {
          const active = e.isIntersecting && e.intersectionRatio > 0.6;
          link.classList.toggle("active", active);
          link.setAttribute("aria-current", active ? "page" : "false");
        }
      });
    },
    { threshold: [0.6] }
  );
  sections.forEach(s => s && obs.observe(s));
}

document.addEventListener("DOMContentLoaded", init);
