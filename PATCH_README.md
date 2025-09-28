# Tiny Patch: Fonts (/assets/fonts) + Hero Gradient + Grid

This patch **does not replace** your existing files. It adds small CSS files and shows exactly what to insert in `index.html`.

## 1) Upload these files (keep paths)
- `assets/css/fonts.css`        ← loads Minion from `/assets/fonts/`
- `assets/css/fonts-use.css`    ← (optional) sets body/headings to use Minion
- `assets/css/hero-grid-patch.css` ← gradient hero + grid-2

## 2) Edit your `<head>` in `index.html` (add before your main CSS)
```html
<link rel="stylesheet" href="/assets/css/fonts.css?v=2">
<link rel="stylesheet" href="/assets/css/fonts-use.css?v=2">   <!-- optional -->
<link rel="stylesheet" href="/assets/css/hero-grid-patch.css?v=2">
<link rel="stylesheet" href="/assets/css/site.css?v=2">        <!-- your existing CSS -->
```

## 3) (Optional) If your hero tag is still `class="hero card"`
Change it to:
```diff
- <section class="hero card" id="top">
+ <section class="hero" id="top">
```
(If you keep `card`, the patch also includes a `.hero.card { background: transparent !important }` override.)

## 4) Verify
Open your site with a cache-buster: `/?bust=patch-20250928022622`

That’s it — fonts load from `/assets/fonts/`, the hero shows the gradient, and the grid is ready.
