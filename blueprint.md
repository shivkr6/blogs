
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

*   **Header & Footer:** Consistent across all pages.
*   **Navigation:** Main navigation includes About, Writing, Experience, and Resume.
*   **Logo Hover Animation:** The logo text smoothly transitions from the primary green to the darker secondary green on hover.
*   **About Page:** The initial landing page with biographical information.
*   **Writing Page:** A section listing all articles, grouped by year.
*   **Responsive Navigation:** A hamburger menu on smaller screens.

## Completed Tasks

1.  **Initial Scaffolding & About Page:** Created the main HTML, CSS, and JS files.
2.  **Mobile Navigation:** Implemented the hamburger menu for smaller screens.
3.  **"Writing" Section:** Created the `writing.html` page.
4.  **Navigation Update:** Updated the main navigation to include "Experience" and "Resume".
5.  **Theming & Animation:** Applied a green color scheme and refined the logo animation.
6.  **Logo Hover Effect:** Simplified the logo animation to a simple color change on hover.
7.  **Footer Gradient:** Implemented and refined a complex, multi-layered gradient for the footer.

## Current Plan: Modernize Footer Gradient (No Yellow)

1.  **Define `oklch` Color Palette:** Update the CSS variables in `style.css` to use an `oklch` color palette of lime green and sea green.
2.  **Refine Gradient Composition:** Adjust the `radial-gradient` properties to create a smoother, more atmospheric blend of colors, resulting in a sophisticated, modern aesthetic without any yellow.
