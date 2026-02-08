# Personal Portfolio Website

A modern personal portfolio website built with Next.js, TypeScript, and deployed on Vercel.

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Pages

- **Homepage** (`/`) - Main landing page
- **About** (`/about`) - About page
- **Resume** (`/resume`) - Resume page
- **Contact** (`/contact`) - Contact page
- **Projects** (`/projects`) - Projects showcase
- **Blog** (`/blog`) - Blog page

## Navigation

All pages include a shared navigation menu at the top that links to all 6 pages.

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Hosting**: Vercel (to be configured)

## Project Structure

```
personal_website/
├── components/          # Reusable React components
│   └── Navigation.tsx   # Navigation menu component
├── pages/              # Next.js pages (routing)
│   ├── _app.tsx        # App wrapper
│   ├── index.tsx       # Homepage
│   ├── about.tsx       # About page
│   ├── resume.tsx      # Resume page
│   ├── contact.tsx     # Contact page
│   ├── projects.tsx    # Projects page
│   └── blog.tsx        # Blog page
├── styles/             # CSS styles
│   ├── globals.css     # Global styles
│   └── Navigation.module.css  # Navigation styles
└── package.json        # Dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
