# 🛡️ Cybersecurity Portfolio - Dual Mode (Terminal & GUI)

A modern, high-performance portfolio for cybersecurity professionals, featuring a unique **dual-mode interface**: a hacker-themed Linux Terminal (default) and a polished professional Window GUI.

Built with **React 19**, **Tailwind CSS v4**, and **Framer Motion**.

## 🚀 Live Demo
[Check out the portfolio here](https://cybersecurity.padlock.works) *(Replace with actual link if available)*

---

## ✨ Features

-   **🖥️ Dual UI Modes**:
    *   **Linux UI (Default)**: A fully functional terminal emulator where visitors can explore your profile using commands (`help`, `about`, `skills`, `writeups`, etc.).
    *   **Window UI**: A modern, sleek GUI with glassmorphism, responsive sections, and professional animations.
-   **📑 CTF Write-ups & Projects**: Showcasing problem-solving skills from platforms like TryHackMe (e.g., Blue, Kenobi, n8n rooms).
-   **🛠️ Core Competencies**: Highlighted technical skills across Reconnaissance, Exploitation, Web Security, and more.
-   **📱 Fully Responsive**: Optimized for all devices, from mobile phones to ultra-wide monitors.
-   **♿ Accessibility & UX**: Smooth scrolling, keyboard navigation in terminal, and optimized performance.

---

## 🛠️ Tech Stack

-   **Frontend**: React 19 (Hooks, Functional Components)
-   **Backend**: Node.js & Express (API for projects & log analysis)
-   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Build Tool**: [Vite 6](https://vitejs.dev/)

---

## 🚀 Getting Started

### Prerequisites

-   Node.js (v20+ recommended)
-   npm or pnpm

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Trailblazer-dev/cybersecurity-portfolio.git
    cd cybersecurity-portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start full-stack development server**
    ```bash
    npm run dev:all
    ```

This will start both the Vite frontend (http://localhost:5173) and the Express backend (http://localhost:5000).

---

## 📁 Project Structure

```
/src
├── components/                  
│   ├── LinuxTerminal.jsx        # Default terminal UI emulator
│   ├── LogAnalyzer.jsx          # Interactive defensive thinking tool
│   ├── Writeups.jsx             # Fetches projects from Backend API
│   └── ...
/server
├── data/
│   └── projects.json            # Centralized project data (Incident Reports, etc.)
├── index.js                     # Express server entry point
└── .env                         # Backend configuration
```

---

## 🔧 Customization

-   **Frontend UI & Static Content**: Edit `src/constraints/constraint.js`
-   **Projects & Structured Reports**: Edit `server/data/projects.json` (Fulfills `docs/specification.md` requirements)
-   **Log Analysis Rules**: Update logic in `server/index.js`

---

## 👤 Author

**Rich Kariuki**
-   LinkedIn: [Rich Victor Emanuel](https://www.linkedin.com/in/rich-victor-emanuel-001165196/)
-   TryHackMe: [vimrichy](https://tryhackme.com/p/vimrichy)
-   GitHub: [@Trailblazer-dev](https://github.com/Trailblazer-dev)

---

## 📄 License

This project is licensed under the MIT License.