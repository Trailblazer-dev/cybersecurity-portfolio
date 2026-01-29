# Software Requirements Specification (SRS) - Cybersecurity Portfolio

## 1. Introduction
### 1.1 Purpose
The purpose of this document is to specify the software requirements for the Cybersecurity Portfolio website. This site serves as a professional showcase for cybersecurity skills, certifications, and project writeups.

### 1.2 Scope
The website is a dual-mode React application featuring a "Linux Terminal" interface and a modern "GUI" interface. It includes sections for:
- Hero/Introduction
- About Me
- Technical Skills
- Project Writeups (TryHackMe, etc.)
- Contact Information

## 2. Overall Description
### 2.1 Product Perspective
A standalone frontend application built with React, Vite, and Tailwind CSS. It is designed to be hosted on Vercel.

### 2.2 Product Functions
- **Dual Mode UI**: Users can toggle between a retro Linux Terminal and a modern GUI.
- **Terminal Simulation**: Implements common Linux commands (`help`, `ls`, `cat`, `clear`, `gui`, etc.) to navigate content.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop.
- **Dynamic Content**: Displays cybersecurity certifications (e.g., Pre-Security) and specific TryHackMe room achievements.

### 2.3 User Classes and Characteristics
- **Recruiters/Hiring Managers**: Looking for a quick overview of skills and professionalism.
- **Cybersecurity Peers**: Interested in technical writeups and shared learning.

## 3. Specific Requirements
### 3.1 External Interface Requirements
- **User Interfaces**:
    - Terminal: Black background, green text, monospaced font.
    - GUI: Modern dark theme, glassmorphism, responsive navigation.
- **Software Interfaces**: React 19, Tailwind CSS v4, Framer Motion for animations.

### 3.2 System Features
- **Terminal Execution Engine**: A state-based command processor that handles user input and maps it to specific content or actions.
- **GUI Navigation**: Sticky header with intersection observer for active section highlighting.

### 3.3 Non-functional Requirements
- **Performance**: Rapid initial load (< 2s) and smooth transitions.
- **Accessibility**: ARIA labels for buttons and links.
- **Maintainability**: Centralized `constraint.js` for all content data.
