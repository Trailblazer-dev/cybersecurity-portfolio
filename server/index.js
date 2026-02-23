import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors(
  {origin: process.env.VITE_API_URL || 'http://localhost:5173'}
));
app.use(express.json());

// Routes
app.get('/api/projects', (req, res) => {
  const filePath = path.join(__dirname, 'data', 'projects.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading projects file:', err);
      return res.status(500).json({ error: 'Failed to read projects data' });
    }
    res.json(JSON.parse(data));
  });
});

app.get('/api/skills', (req, res) => {
  // We can also serve skills from the backend
  const skills = [
    { name: "Nmap", category: "Reconnaissance" },
    { name: "Wireshark", category: "Network Analysis" },
    { name: "Metasploit", category: "Exploitation" },
    { name: "Burp Suite", category: "Web Security" },
    { name: "Nikto", category: "Vulnerability Scanning" },
    { name: "John the Ripper", category: "Password Cracking" },
    { name: "Python", category: "Scripting" },
    { name: "Bash", category: "Scripting" },
    { name: "Linux", category: "Operating System" },
    { name: "Docker", category: "Containers" },
    { name: "TCP/IP", category: "Networking" },
    { name: "SQL Injection", category: "Web Security" },
  ];
  res.json(skills);
});

// Mock Log Analyzer for "Defensive Thinking"
app.post('/api/analyze-log', (req, res) => {
  const { log } = req.body;
  if (!log) {
    return res.status(400).json({ error: 'No log provided' });
  }

  // Simple rule-based analysis
  const results = [];
  if (log.includes('Failed password for root')) {
    results.push({
      severity: 'High',
      message: 'Potential SSH Brute-Force attack detected on root user.',
      recommendation: 'Disable root SSH login and implement fail2ban.'
    });
  }
  if (log.includes('DROP TABLE')) {
    results.push({
      severity: 'Critical',
      message: 'Potential SQL Injection attack detected.',
      recommendation: 'Use prepared statements and validate user input.'
    });
  }
  if (log.includes('404')) {
    results.push({
      severity: 'Low',
      message: 'Page not found. Multiple 404s might indicate directory enumeration.',
      recommendation: 'Monitor for directory scanning tools like gobuster.'
    });
  }

  if (results.length === 0) {
    results.push({
      severity: 'Informational',
      message: 'No suspicious activity detected in the log.',
      recommendation: 'Continue monitoring for unusual patterns.'
    });
  }

  res.json({ results });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
