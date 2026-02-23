# Hosting Guide: Cybersecurity Portfolio

This project consists of a **React (Vite)** frontend and a **Node.js (Express)** backend. To have a fully functional site, both components must be hosted and communicating with each other.

---

## Architecture Overview

1.  **Frontend:** Static files served to the user's browser.
2.  **Backend:** A running server that provides the `/api/projects` data and the `/api/analyze-log` logic.
3.  **Communication:** The frontend makes HTTP requests to the backend URL.

---

## Recommended Hosting Strategy (PaaS)

The easiest way to host this for free or low cost is to use "Platform as a Service" providers.

### 1. Host the Backend (Express)
**Recommended Platform:** [Render](https://render.com/) or [Railway](https://railway.app/)

*   **Steps for Render:**
    1.  Create a new **Web Service**.
    2.  Connect your GitHub repository.
    3.  Set the **Root Directory** to `server` (or leave as root if your package.json handles it).
    4.  **Build Command:** `npm install`
    5.  **Start Command:** `node index.js`
    6.  **Environment Variables:** Add `PORT=10000` (Render will provide this).

### 2. Host the Frontend (React/Vite)
**Recommended Platform:** [Vercel](https://vercel.com/) or [Netlify](https://netlify.com/)

*   **Steps for Vercel:**
    1.  Create a new project and connect your GitHub repo.
    2.  Vercel will detect it as a Vite project.
    3.  **Build Command:** `npm run build`
    4.  **Output Directory:** `dist`
    5.  **Environment Variables:** Create a variable named `VITE_API_URL` and set it to your **Backend URL** (e.g., `https://your-backend.onrender.com`).

---

## Critical Code Adjustments for Production

Before deploying, you must update the hardcoded `localhost` URLs in your frontend so they can point to your live server.

### 1. Update Frontend API Calls
In files like `Writeups.jsx` and `LogAnalyzer.jsx`, change:
```javascript
// From:
fetch('http://localhost:5000/api/projects')

// To (using Environment Variables):
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
fetch(`${API_URL}/api/projects`)
```

### 2. Update Backend CORS
In `server/index.js`, ensure CORS allows your frontend domain:
```javascript
app.use(cors({
  origin: 'https://your-portfolio-frontend.vercel.app' // Replace with your actual live URL
}));
```

---

## Option 2: Single VPS (Advanced)
If you prefer a single server (DigitalOcean Droplet, AWS EC2, or Linode):

1.  **Install Node.js and Nginx.**
2.  **Clone the repo.**
3.  **Frontend:** Run `npm run build` and point Nginx to the `/dist` folder.
4.  **Backend:** Use a process manager like **PM2** to keep the `server/index.js` running in the background.
5.  **Reverse Proxy:** Configure Nginx to route requests from `yourdomain.com/api` to `localhost:5000`.

---

## Deployment Checklist
- [ ] Backend is running and API is reachable via tool like Postman.
- [ ] Frontend environment variables point to the correct Backend URL.
- [ ] CORS is configured on the backend to allow requests from the frontend.
- [ ] `projects.json` is included in the server deployment.
