# Component Documentation

This document provides detailed information about the main components used in the cybersecurity portfolio.

## 1. LinuxTerminal Component

The default interface for the website. It simulates a Linux terminal environment.

### Features
- Command processing (help, about, skills, writeups, contact, gui, clear).
- Command history.
- Responsive design (scales fonts for mobile).
- Integrated GUI toggle.

## 2. Header Component

Navigation header for the GUI mode.

### Features
- Sticky positioning with scroll detection.
- Mobile drawer-style menu.
- Active section highlighting using Intersection Observer.

## 3. Hero Component

The landing section for the GUI mode.

### Features
- Animated "hacker" avatar.
- Floating tech icons with Framer Motion animations.
- Responsive centering for mobile.

## 4. Writeups Component

Displays project writeups and cybersecurity labs.

### Features
- Integrated carousel for mobile/tablet views.
- Grid layout for desktop.
- Data-driven from `constraint.js`.

## 5. Skills Component

Showcases technical competencies.

### Features
- Categorized skill sets (Web, Linux, Tools, etc.).
- Animated progress/entry icons.

## 6. Button Component

A reusable, polymorphic button component.

### Props
- `as`: Renders as 'button', 'a', or 'div'.
- `href`: Link for anchor tags.
- `swit`: Toggles between primary and secondary styles.
- `className`: Custom Tailwind classes.

## 7. About & Contact Components

Standard informational components optimized for readability and responsive layout.