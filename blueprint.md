
# Blueprint: Zach Holman's Personal Website Replica

## Overview

This document outlines the plan and implementation details for creating a pixel-perfect, responsive replica of Zach Holman's personal website. The project will be built using vanilla HTML, CSS, and JavaScript, adhering to modern web standards and best practices.

## Project Outline

### **1. Visual Design & Style**

*   **Palette:**
    *   Text: Almost black (`#222`)
    *   Background: White (`#fff`)
    *   Primary Accent: Green (`#00ab44`)
    *   Secondary Accent: Dark Green (`#007a30`)
    *   Links: The primary accent color (`#00ab44`).
    *   Footer Background: A smooth, atmospheric mesh gradient using the modern `oklch` color space. The palette includes vibrant yet soft shades of lime green and sea green for a fresh, contemporary feel.
*   **Typography:**
    *   A clean, modern sans-serif font (`-apple-system`, `BlinkMacSystemFont`, etc.).
*   **Layout:**
    *   Single column with a `max-width` for readability.
    *   Grid-based layout for article listings.

### **2. Features & Interactivity**

*   **Header & Footer:** Consistent across all pages, implemented as reusable Web Components (`<site-header>` and `<site-footer>`).
*   **Navigation:** Main navigation includes About, Writing, Experience, and Resume.
*   **Logo Hover Animation:** The logo text smoothly transitions from the primary green to the darker secondary green on hover.
*   **About Page:** The initial landing page with biographical information.
*   **Writing Page:** A section listing all articles, grouped by year.
*   **Experience Page:** A dedicated page showcasing professional experience in a clean, modern layout.
*   **Responsive Navigation:** A hamburger menu on smaller screens, encapsulated within the `<site-header>` component.

## Completed Tasks

1.  **Initial Scaffolding & About Page.**
2.  **Mobile Navigation.**
3.  **"Writing" Section.**
4.  **Navigation Update.**
5.  **Theming & Animation.**
6.  **Logo Hover Effect.**
7.  **Footer Gradient Modernization.**
8.  **"Experience" Page Creation & Styling.**
9.  **Navigation Bar Consistency.**

## Current Plan: Refactor Header & Footer into Web Components

1.  **Create Component Files:** Create `site-header.js` and `site-footer.js` in a new `components` directory.
2.  **Build `<site-header>` Component:**
    *   Define a `SiteHeader` class that extends `HTMLElement`.
    *   Move the header HTML, including the logo and navigation, into the component's shadow DOM.
    *   Encapsulate the hamburger menu functionality (event listeners and class toggling) within the component.
    *   Link `style.css` inside the shadow DOM.
    *   Define the custom element as `site-header`.
3.  **Build `<site-footer>` Component:**
    *   Define a `SiteFooter` class.
    *   Move the footer HTML into its shadow DOM.
    *   Link `style.css` inside the shadow DOM.
    *   Define the custom element as `site-footer`.
4.  **Update `main.js`:** Modify the main script to import and register the new components.
5.  **Update HTML Pages:** Replace the static `<header>` and `<footer>` elements in `index.html`, `writing.html`, and `experience.html` with the new `<site-header>` and `<site-footer>` custom elements.
