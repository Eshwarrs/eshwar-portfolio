# Eshwar S — Portfolio

A responsive, animated personal portfolio for Eshwar S, based on his supplied resume.

## Local preview

Open `index.html` in your browser, or serve the directory using:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000.

## Deploy on Vercel

1. Create a GitHub repository and push the files in this directory.
2. Go to https://vercel.com/new and import the repository.
3. Set Framework Preset to **Other** and Root Directory to `./`.
4. Leave Build Command and Output Directory unset; click **Deploy**.

No environment variables or external APIs are required. Google Fonts loads from its CDN, with local font fallbacks.

## Content updates

- Edit text, links, experience, and project details in `index.html`.
- Edit the look and layout in `style.css`.
- Edit animations and behavior in `script.js`.
- Project cards intentionally have no demo links until real project URLs are supplied.
- The contact section uses the email, LinkedIn, and phone details from the supplied resume.

## Accessibility

Includes semantic landmarks, keyboard focus styles, skip link, responsive navigation, and reduced-motion support.
