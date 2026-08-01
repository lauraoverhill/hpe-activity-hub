# HPE Activity Hub

An accessible, public HPE resource library built with Astro.

## Run locally

```powershell
npm install
npm run dev
```

## Quality checks

```powershell
npm run build
npx eslint .
```

## Content model

See [CONTENT_GUIDE.md](CONTENT_GUIDE.md) for the folders, publishing workflow, and learner/teacher audience boundary.

## Deployment

Build command: `npm run build`  
Publish directory: `dist`

Before the first deployment, update `site` in `astro.config.mjs` to the final public domain.
