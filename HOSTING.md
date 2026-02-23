# Hosting Guide: Cybersecurity Portfolio

This project is optimized for deployment using a **React (Vite)** frontend and a **Node.js (Express)** backend. The architecture is designed to be "monorepo-friendly," allowing you to manage both from a single repository.

---

## Architecture Overview

1.  **Frontend:** Static files built with Vite and hosted on a CDN (Vercel/Netlify).
2.  **Backend:** A Node.js server running Express, providing the `/api/projects` data and `/api/analyze-log` logic.
3.  **Centralized Config:** All API communication is routed through `src/constraints/constraint.js` using the `CONFIG.API_URL` constant.

---

## Recommended Hosting Strategy

### 1. Host the Backend (Express)
**Platform:** [Render](https://render.com/) (Recommended for its "Web Service" support)

*   **Steps for Render:**
    1.  Create a new **Web Service**.
    2.  Connect your GitHub repository.
    3.  **Root Directory:** Leave as the default (root `/`).
    4.  **Build Command:** `npm install`
    5.  **Start Command:** `npm start` (This triggers `node server/index.js` as configured in `package.json`).
    6.  **Environment Variables:** Render automatically assigns a `PORT`. If your local `.env` has specific secrets, add them here.

### 2. Host the Frontend (React/Vite)
**Platform:** [Vercel](https://vercel.com/) or [Netlify](https://netlify.com/)

*   **Steps for Vercel:**
    1.  Connect your GitHub repo.
    2.  **Framework Preset:** Vite.
    3.  **Build Command:** `npm run build`
    4.  **Output Directory:** `dist`
    5.  **Environment Variables (CRITICAL):** 
        *   Add a variable named **`VITE_API_URL`**.
        *   Set the value to your **Backend URL** from Render (e.g., `https://your-backend.onrender.com`).
        *   *Note: Do not include a trailing slash.*

---

## Environment Configuration

The project uses a tiered configuration system in `src/constraints/constraint.js`:

```javascript
export const CONFIG = {
  API_URL: (typeof import.meta !== 'undefined' && import.meta.env?.VITE_API_URL) 
    ? import.meta.env.VITE_API_URL 
    : "http://localhost:5000"
};
```

1.  **Production:** Uses the `VITE_API_URL` variable set in your hosting provider's dashboard.
2.  **Local Dev:** Uses the value in your root `.env` file or defaults to `http://localhost:5000`.

---

## Troubleshooting & CORS

If you encounter "CORS" errors in the browser console:
1.  Go to `server/index.js`.
2.  Ensure `app.use(cors())` is active.
3.  For maximum security in production, restrict origins:
    ```javascript
    app.use(cors({
      origin: 'https://your-live-portfolio-url.vercel.app'
    }));
    ```

## Deployment Checklist
- [ ] Backend `npm start` command is verified in Render logs.
- [ ] Frontend `VITE_API_URL` environment variable is set in the hosting dashboard.
- [ ] `server/data/projects.json` contains your latest write-ups.
- [ ] The "Log Analyzer" works on the live site (confirms end-to-end connectivity).
