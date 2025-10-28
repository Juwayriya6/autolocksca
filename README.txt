AUTOLOCKS.CA — FINAL BUILD (GitHub + Netlify)
=============================================

Included
- reCAPTCHA v3 (contact.html) — key: 6LcZOfkrAAAAAFVlEed_qHjwh6k6mukoX_cwXaWw
- Mobile “Call Now” button (pulse + auto-hide)
- Lazy-loaded images
- Netlify Image CDN: _headers
- HTTPS + www redirects: _redirects
- robots.txt + sitemap.xml
- Favicons & manifest: existing set in assets/images/
- CSS/JS optimized; references to assets/css/main.css and assets/js/main.js

Deploy (Netlify drag & drop)
1) Zip repo contents and drop onto Netlify → Deploys.
2) Site settings → Domain management → HTTPS → Verify DNS → Provision certificate.

DNS (Porkbun)
A      autolocks.ca      75.2.60.5
CNAME  www               autolocksca.netlify.app

Checks
- https://www.autolocks.ca loads securely
- Contact form creates Netlify form submissions
- Favicons render (tab & mobile)
- Call button visible on mobile
