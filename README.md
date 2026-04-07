# FE framework playground for Netlify

Workspace gom 3 project de ban xem structure va tap deploy:

- `nuxt-app`
- `next-app`
- `astro-app`

## 1) Nuxt

```bash
cd nuxt-app
npm install
npm run dev
npm run build
```

Deploy Netlify:

- Build command: `npm run build`
- Publish directory: `.output/public`
- Environment variable: `NITRO_PRESET=netlify`

## 2) Next.js

```bash
cd next-app
npm install
npm run dev
npm run build
```

Deploy Netlify:

- Build command: `npm run build`
- Publish directory: `out`

## 3) Astro

```bash
cd astro-app
npm install
npm run dev
npm run build
```

Deploy Netlify:

- Build command: `npm run build`
- Publish directory: `dist`

## Notes

- Moi project da co 1 portfolio landing page o route `/`.
- Moi project da co file `netlify.toml` rieng de ban deploy nhanh.
- Ban co the import tung folder project vao Netlify nhu 3 site doc lap.
