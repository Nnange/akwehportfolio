# Nnange Awong — Personal Portfolio

A personal portfolio website built with React and Vite, showcasing projects, work experience, skills, and education. Deployed via Docker and a Jenkins CI/CD pipeline.

Live site: [awongnnange.com](https://www.awongnnange.com)

## Tech Stack

- **Frontend:** React 19, Vite 7, Tailwind CSS 4, MUI 7, React Router 7
- **Deployment:** Docker (multi-stage), Nginx, Jenkins CI/CD

## Sections

- **About** — Background, education, and personal introduction
- **Resume** — Work experience and education timeline
- **Portfolio** — Featured projects (Amazon Clone, TaskFlow, WhatsApp Clone, Netflix Clone)
- **Contact** — Social links and contact form

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Docker

```bash
# Build image
docker build -t akwehportfolio:latest .

# Run container (serves on port 3000)
docker run -d -p 3000:80 --name akwehportfolio --restart unless-stopped akwehportfolio:latest
```

The Dockerfile uses a multi-stage build: Node 22 compiles the Vite app, and the output is served with Nginx Alpine.

## CI/CD

The `Jenkinsfile` defines a three-stage pipeline:

1. **Checkout** — pulls source from SCM
2. **Build** — runs `npm install && npm run build` then builds the Docker image
3. **Deploy** — stops the old container, tags the previous image for rollback, and starts a fresh container on port 3000

## Project Structure

```
src/
├── components/     # Header, About, Resume, Portfolio, Contact, Footer, Testimonials
├── CSS/            # Component-scoped stylesheets
├── resumeData.js   # All portfolio content (bio, experience, projects, skills)
├── firebase.jsx    # Firebase configuration
└── main.jsx        # App entry point
```

All portfolio content is centralized in [src/resumeData.js](src/resumeData.js) — edit that file to update bio, work history, projects, or skills without touching component logic.
