# Copilot Instructions for ProyectoFinal_TPW

## Project Overview
This is a static web project for a financial services platform. The codebase is organized by feature, with separate folders for HTML, CSS, JavaScript, and images. Each major section (Clientes, Contacto, Convenios, PaginaPrincipal) has its own subdirectory and associated assets.

## Directory Structure
- `HTML/` — Contains feature-specific subfolders, each with an `index.html`.
- `CSS/` — Contains CSS files named after each feature.
- `JavaScript/` — Contains JS files named after each feature.
- `Images/` — Shared image assets for the site.

## Key Patterns & Conventions
- **One-to-one mapping:** Each feature (Clientes, Contacto, etc.) has a dedicated HTML, CSS, and JS file. For example, `HTML/Clientes/index.html` uses `CSS/Clientes.css` and `JavaScript/Cliente.js`.
- **No build system:** This is a static site; there are no build scripts, package managers, or frameworks. All files are loaded directly by the browser.
- **No external dependencies:** All code and assets are local. No npm, pip, or other package managers are used.
- **Navigation:** Navigation between sections is handled via standard HTML links.

## Development Workflow
- **Edit HTML/CSS/JS directly:** Make changes in the corresponding files for each feature.
- **Preview:** Open the relevant HTML file in a browser to view changes. No local server is required.
- **Debugging:** Use browser developer tools (F12) for inspecting elements and debugging JavaScript.

## Project-Specific Guidance
- **Keep feature separation:** When adding new features, create new HTML, CSS, and JS files following the existing naming and folder conventions.
- **Reuse assets:** Place shared images in the `Images/` folder and reference them with relative paths.
- **No backend integration:** All logic is client-side. Do not add server-side code or APIs.

## Example: Adding a New Feature
1. Create `HTML/NuevaSeccion/index.html`.
2. Create `CSS/NuevaSeccion.css` and `JavaScript/NuevaSeccion.js`.
3. Link the CSS and JS in the new HTML file.
4. Add navigation links as needed in all relevant HTML files.

## Key Files
- `HTML/Clientes/index.html`, `CSS/Clientes.css`, `JavaScript/Cliente.js` — Example of feature mapping.
- `Images/` — Centralized image assets.

---

For questions about project structure or conventions, review this file or examine the directory layout for examples.