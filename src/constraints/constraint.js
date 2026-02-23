// Cybersecurity-Portfolio/src/data/content.js

// ==== ICONS ====
// Using text placeholders for icons. You can replace these with actual icon components (e.g., from lucide-react)
const TerminalIcon = "[T_]";
const UserIcon = "[U_]";
const FileTextIcon = "[F_]";
const MailIcon = "[M_]";

// ==== ASSETS ====
// Placeholder for a hero image. Replace with a relevant image.
const HeroImage = "/placeholder-hero.svg"; 

// =================================================================================
// CONFIGURATION
// =================================================================================
export const CONFIG = {
  // Replace this with your actual backend URL after hosting (e.g., https://your-app.onrender.com)
  API_URL: (typeof import.meta !== 'undefined' && import.meta.env?.VITE_API_URL) 
    ? import.meta.env.VITE_API_URL 
    : "http://localhost:5000"
};

// =================================================================================
// NAVIGATION
// =================================================================================
export const header = [
  { title: "Home", id: "home" },
  { title: "About", id: "about" },
  { title: "Skills", id: "skills" },
  { title: "Write-ups", id: "writeups" },
  { title: "Analyzer", id: "analyzer" },
  { title: "Contact", id: "contact" },
];

// =================================================================================
// HERO SECTION
// =================================================================================
export const heroSection = {
  caption: "For IT professionals levelling into security",
  title: "Rich Kariuki",
  subtitle: "Ethical Hacker & Pentester in Training",
  Image: HeroImage,
  icons: [
    { url: "https://www.linkedin.com/in/rich-victor-emanuel-001165196/", alt: "LinkedIn", id: 1 },
    { url: "https://github.com/Trailblazer-dev", alt: "Github", id: 2 },
    { url: "mailto:richvictor830@gmail.com", alt: "Email", id: 3 },
  ],
  button1: "Download CV",
  button2: "Let's Talk",
};

// =================================================================================
// ABOUT SECTION
// =================================================================================
export const about = {
  icon: UserIcon,
  name: "Rich Victor Emanuel Kariuki",
  img: "/profile.jpg", // Updated with user's profile image
  desktop: [
    { desc: "👋 I'm Rich, a cybersecurity professional focused on defensive operations and practical security implementation." },
    { desc: "🔒 My approach combines deep technical research with a 'practitioner mindset'—not just using tools, but understanding the underlying mechanics of attacks to build robust defenses." },
    { desc: "🎯 I specialize in turning complex threat reports into actionable security improvements, with a strong foundation in network analysis, ethical hacking, and cloud security." },
    { desc: "💡 I believe that effective security is about clear thinking and structured reasoning, ensuring that every detection and mitigation strategy is purpose-built and well-documented." },
  ],
  mobile: [
      {text:"I'm a cybersecurity professional focused on defensive operations and practical security implementation. I combine technical research with a practitioner mindset, specializing in turning complex threat reports into actionable security improvements and robust defense strategies."}
  ]
};

// =================================================================================
// SKILLS SECTION
// =================================================================================
export const skills = {
  icon: TerminalIcon,
  title: "Core Competencies",
  subtitle: "Tools and technologies I work with.",
  
  // List your cybersecurity skills here.
  // I'm using a simple list format. The component will render this.
  // You can add 'icon' properties if you find suitable SVGs/images.
  skillset: [
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
  ]
};

// =================================================================================
// WRITE-UPS SECTION (Previously Portfolio)
// =================================================================================
export const writeups = {
  icon: FileTextIcon,
  title: "CTF Write-ups & Projects",
  // Example structure for a TryHackMe write-up
  projects: [
    {
      id: 1,
      title: "Pre-Security Certificate",
      category: "Defensive Thinking",
      description: "Successfully completed the Pre-Security learning path on TryHackMe, mastering fundamental cybersecurity concepts including networking, web fundamentals, and Linux.",
      tags: ["Certificate", "Networking", "Web", "Linux"],
      url: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-CQWYE2SL0O.pdf",
      img: "/tryhackme_logo_full.svg", 
    },
    {
      id: 2,
      title: "n8n - TryHackMe Room",
      category: "Practitioner Mindset",
      description: "Exploited a vulnerability in n8n (workflow automation tool) to gain initial access and escalate privileges. Demonstrated understanding of automation security.",
      tags: ["Automation", "RCE", "Privilege Escalation"],
      url: "https://tryhackme.com/room/n8n", // Assuming standard room URL structure or user profile link
      img: "/n8n room.png", 
    },
    {
      id: 3,
      title: "Blue - TryHackMe Room",
      category: "CTF Write-ups",
      description: "A detailed walkthrough of the 'Blue' room on TryHackMe, focusing on exploiting the EternalBlue vulnerability (MS17-010) on a Windows 7 machine.",
      tags: ["Windows", "Metasploit", "MS17-010"],
      // You can link to a markdown file, a blog post, or a page on your site
      url: "https://tryhackme.com/room/blue", 
      img: "/thm-blue-placeholder.svg", // Placeholder image for the project
    },
    {
      id: 4,
      title: "Kenobi - TryHackMe Room",
      category: "CTF Write-ups",
      description: "Exploiting a Linux machine with a vulnerable ProFTPD version and escalating privileges by manipulating SUID bits on system binaries.",
      tags: ["Linux", "ProFTPD", "SUID", "Privilege Escalation"],
      url: "https://tryhackme.com/room/kenobi",
      img: "/thm-kenobi-placeholder.svg", // Placeholder image for the project
    },
    {
      id: 5,
      title: "Basic Pentesting - TryHackMe Room",
      category: "CTF Write-ups",
      description: "A comprehensive write-up covering enumeration, service scanning, and privilege escalation on a beginner-level penetration testing challenge.",
      tags: ["Enumeration", "Samba", "Privilege Escalation"],
      url: "https://tryhackme.com/room/basicpentestingthm",
      img: "/thm-pentesting-placeholder.svg", // Placeholder image for the project
    },
    // Add more of your write-ups here
  ],
  more: "View My TryHackMe Profile",
  moreUrl: "https://tryhackme.com/p/vimrichy" // Replace with your actual profile URL
};


// =================================================================================
// CONTACT SECTION
// =================================================================================
export const contact = {
  icon: MailIcon,
  title: "Contact Me",
  whatapp: "Let's talk",
  email: {
    icon: MailIcon,
    text: "richvictor830@gmail.com",
    copyicon: "[C_]",
  },
};

// =================================================================================
// FOOTER SECTION
// =================================================================================
export const footer = {
  copyright: `Copyright © ${new Date().getFullYear()} Rich Kariuki`,
  socials: [
    { url: "https://www.linkedin.com/in/rich-victor-emanuel-001165196/", alt: "LinkedIn", id: 1 },
    { url: "https://github.com/Trailblazer-dev", alt: "Github", id: 2 },
  ],
};