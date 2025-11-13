// Hide broken file links (mainly PDFs) so users never hit 404s.
(function () {
  async function headOK(url) {
    try {
      const r = await fetch(url, {method: "HEAD", cache: "no-store"});
      return r.ok;
    } catch (e) { return false; }
  }
  document.addEventListener("DOMContentLoaded", async () => {
    const anchors = Array.from(document.querySelectorAll('a[href*=".pdf"], a[data-must-exist]'));
    await Promise.all(anchors.map(async (a) => {
      const ok = await headOK(a.href);
      if (!ok) {
        const host = a.closest("li, p, div, dd, dt");
        (host || a).style.display = "none";
      }
    }));
  });
})();
