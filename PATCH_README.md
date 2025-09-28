# Tiny Patch: Hero Background + Two‑Column Grid (and optional link hider)

This patch keeps your content intact and only adds what's needed.

## 1) Change one class in `index.html`
Find your hero section and remove `card`:
```diff
- <section class="hero card" id="top">
+ <section class="hero" id="top">
```
(See `index.html.example.diff` in this zip.)

## 2) Append CSS (do not replace your file)
Open `assets/css/site.css` and paste the contents of:
`assets/css/append-this-to-site.css`
**at the very end** of your existing CSS.

## 3) (Optional) Enable two columns in the markup
Wrap middle sections in a grid:
```html
<div class="grid-2">
  <section id="research">…</section>
  <section id="publications">…</section>
</div>
```

## 4) (Optional) Hide links if the target files aren’t uploaded yet
Upload `assets/js/hide-missing.js` and add this in your `<head>`:
```html
<script src="/assets/js/hide-missing.js" defer></script>
```
Then add `data-check` to any links that might be missing:
```html
<div class="actions">
  <a class="btn" href="/assets/notes/hydro-diffusive-obstacle.pdf" data-check>Notes</a>
  <a class="btn" href="/assets/slides/hydro-diffusive-obstacle/" data-check>Slides</a>
</div>
```
If the HEAD request returns 404, the button (or its group) will be hidden.

## 5) Commit and cache-bust
Commit your changes, then open:
`https://shubham-parashar-cmt.github.io/?bust=hero-20250928004048`

That’s it — you’ll get a proper gradient hero and a tidy two‑column layout on desktop.
