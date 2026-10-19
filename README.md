# Aswin A — developer portfolio

A personal portfolio presenting full-stack applications, systems and interface work in a technical build-sheet layout.

[Live portfolio](https://aswin-portfolio-orpin.vercel.app) · [GitHub](https://github.com/Aswnxyz) · [LinkedIn](https://www.linkedin.com/in/aswin-a-dev/)

The live homepage responded on 18 October 2026. Individual project links should be checked separately; a portfolio page being online does not verify the projects it describes.

## Stack and design

Next.js 16 App Router, React 19, TypeScript and Tailwind CSS v4. The app uses local typed project data and React state for its work list, selected project, about and contact views. Serif and monospace typography, restrained colors, grid lines and build-process steps establish the build-sheet presentation without an animation library.

`data/projects.ts` holds the project descriptions, stacks, links and shared contact metadata. UI components render that data; there is no database, CMS or contact-form backend. Contact actions use links and clipboard copying.

## Run locally

Use a current compatible Node.js runtime and npm. No project environment variables are required by the current source.

```bash
git clone https://github.com/Aswnxyz/aswin-portfolio.git
cd aswin-portfolio
npm ci
npm run dev
```

Open `http://localhost:3000`.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |
| `npx tsc --noEmit` | Type checking |

## Structure

```text
app/page.tsx           Main view and selection state
app/layout.tsx         Root layout, metadata and fonts
app/globals.css        Shared styling
components/           Intro, header, work list, project detail, about and contact
data/projects.ts      Typed project records and shared profile metadata
public/               Static assets, including the resume document
```

## Content maintenance and verification

Before publishing a content change, verify project claims against their repositories and test every demo/source/contact link. Distinguish implemented code, concept designs and planned work. Keep dates accurate; Kubernetes configuration alone is not evidence of a completed deployment.

Run lint, type checking and build, then manually check work selection, navigation back to the list, mobile layout, keyboard focus, outbound links, email copy and resume download. No automated test suite or CI workflow is committed in this snapshot.

Known content-review items: ZORO and ShopZen demo URLs returned 404 during the audit; ShopZen's listed Cloudinary technology is not supported by its current dependency/implementation evidence; ZORO's deployment wording needs supporting evidence or qualification. Broader stack claims such as PostgreSQL and Sequelize need examples beyond the inspected public projects. The documentation update leaves displayed portfolio content unchanged so these edits can be reviewed separately.
