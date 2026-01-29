# Technical Specification - Cybersecurity Portfolio

## 1. Technology Stack
- **Framework**: React 19
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS v4 (Alpha/Beta integration)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Hosting**: Vercel

## 2. Architecture
### 2.1 Directory Structure
- `src/components/`: Modular React components.
- `src/constraints/`: Data configuration (content, links, image paths).
- `public/`: Static assets (images, PDF, SVGs).
- `docs/`: Documentation.

### 2.2 Dual Mode Implementation
The application state `isTerminal` (managed in `App.jsx`) determines which view to render.
- **Terminal Mode**: `LinuxTerminal.jsx` handles all user interactions via a simulated shell.
- **GUI Mode**: Standard single-page application (SPA) layout with sections.

### 2.3 Terminal Command Engine
The `LinuxTerminal` component uses a command-to-function mapping:
- `help`: Lists available commands.
- `gui`: Sets `isTerminal` to `false`.
- `writeups`: Displays formatted links to projects.
- `clear`: Resets the terminal history.

### 2.4 Styling Strategy
Uses Tailwind CSS v4 with the `@theme` directive. Colors and spacings are standardized to maintain the "hacker" aesthetic (Emerald/Green on Black).

## 3. Deployment (Vercel)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## 4. Key Components
- **LinuxTerminal**: Simulates a bash environment.
- **Hero**: Visual entry point with floating icons.
- **Skills**: Carousel and grid for technical competencies.
- **Writeups**: Showcase for TryHackMe and other cybersecurity labs.
