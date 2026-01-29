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
-   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (Next-gen CSS engine)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Build Tool**: [Vite 6](https://vitejs.dev/)
-   **Analytics**: Vercel Analytics

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

3.  **Start development server**
    ```bash
    npm run dev
    ```

4.  **Build for production**
    ```bash
    npm run build
    ```

---

## 📁 Project Structure

```
/src
├── components/                  
│   ├── LinuxTerminal.jsx        # Default terminal UI emulator
│   ├── About.jsx                # About section (GUI)
│   ├── Skills.jsx               # Technical skills grid (GUI)
│   ├── Writeups.jsx             # Project gallery with filters (GUI)
│   └── Hero.jsx                 # Responsive landing section (GUI)
├── constraints/                 
│   └── constraint.js            # Centralized content & project data
├── index.css                    # Tailwind v4 configuration & theme
└── App.jsx                      # Main entry point with Mode Switching logic
```

---

## 🔧 Customization

You can update all portfolio content (name, bio, skills, projects) by editing a single file:
`src/constraints/constraint.js`

---

## 👤 Author

**Rich Kariuki**
-   LinkedIn: [Rich Victor Emanuel](https://www.linkedin.com/in/rich-victor-emanuel-001165196/)
-   TryHackMe: [vimrichy](https://tryhackme.com/p/vimrichy)
-   GitHub: [@Trailblazer-dev](https://github.com/Trailblazer-dev)

---

## 📄 License

This project is licensed under the MIT License.