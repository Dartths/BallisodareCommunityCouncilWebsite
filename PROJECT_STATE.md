# Project State

This document describes the current state of the Ballisodare Community Council website project.

## Overview

This is a web application for the Ballisodare Community Council. It is a single-page application (SPA) built with React.

## Technologies

*   **Framework:** [React](https://reactjs.org/)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/). The project uses a custom theme defined in `tailwind.config.js` which includes custom colors and fonts.
*   **Fonts:** The project uses the "Bai Jamjuree" and "Lato" fonts from Google Fonts.
*   **Routing:** [React Router](https://reactrouter.com/)
*   **Linting:** [ESLint](https://eslint.org/)
*   **Package Manager:** [npm](https://www.npmjs.com/)

## Project Structure

The project is structured as follows:

*   `src/`: Contains the main source code for the application.
    *   `assets/`: Contains static assets such as images and logos.
    *   `components/`: Contains reusable React components.
    *   `pages/`: Contains the main pages of the application. The pages are:
        *   Home
        *   About
        *   Facilities
        *   Contact
        *   Clubs and Organisations
        *   Things to Do
        *   Latest News
    *   `styles/`: Contains global styles.
    *   `main.tsx`: The entry point of the application.
    *   `App.tsx`: The root component of the application.
*   `public/`: Contains static assets that are not processed by the build tool.
*   `dist/`: Contains the production build of the application.
*   `node_modules/`: Contains the project's dependencies.
*   `.github/`: Contains GitHub-related files, such as workflows.
*   `package.json`: Contains the project's dependencies and scripts.
*   `vite.config.ts`: The configuration file for Vite.
*   `tailwind.config.js`: The configuration file for Tailwind CSS.
*   `tsconfig.json`: The configuration file for TypeScript.

## Scripts

*   `npm run dev`: Starts the development server.
*   `npm run build`: Builds the application for production.
*   `npm run lint`: Lints the codebase.
*   `npm run preview`: Starts a local server to preview the production build.

## Deployment

The application is deployed to GitHub Pages. The deployment is handled by the `.github/workflows/deploy.yml` workflow. The `base` property in `vite.config.ts` is set to `/BallisodareCommunityCouncilWebsite/` to ensure that the application is served from the correct URL.
