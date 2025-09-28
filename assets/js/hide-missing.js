// Hide missing resource links (optional).
// Usage: add data-check to any <a> you want validated, e.g. <a href="/assets/notes/x.pdf" data-check>Notes</a>
document.addEventListener('DOMContentLoaded', () => {
  const anchors = Array.from(document.querySelectorAll('a[data-check]'));
  if (!anchors.length) return;
  const hide = (a) => {
    const group = a.closest('.actions') || a;
    group.style.display = 'none';
  };
  anchors.forEach((a) => {
    try {
      fetch(a.href, { method: 'HEAD', cache: 'no-store' })
        .then((res) => { if (!res.ok) hide(a); })
        .catch(() => hide(a));
    } catch { hide(a); }
  });
});
