# Minion Pro font wiring — upload instructions

1) Put your Minion webfont files in **/assets/fonts/** (woff2 preferred). Rename if needed so the CSS can find them:
   - MinionPro-Regular.woff2 / .woff / .ttf
   - MinionPro-Italic.woff2 / .woff / .ttf
   - MinionPro-Bold.woff2 / .woff / .ttf
   - (optional) MinionPro-BoldItalic.woff2 / .woff / .ttf
   Or the "Minion3-*.woff2" equivalents if you're using Minion 3.

2) Upload **assets/css/site.css** from this bundle (replace yours if desired).

3) Ensure pages link this stylesheet in <head>:
   <link rel="stylesheet" href="/assets/css/site.css?v=20250926">

4) (Optional) Preload primary font for perf:
   <link rel="preload" href="/assets/fonts/MinionPro-Regular.woff2" as="font" type="font/woff2" crossorigin>

5) Verify at **/font-check.html**. If the computed font-family starts with "MinionPro", you’re done.
