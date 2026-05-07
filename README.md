# RozgarHub - Premium Home Services Platform

**RozgarHub** is a sophisticated, data-driven web application designed to connect homeowners in Islamabad with professional service providers. The platform specializes in home appliance repair, cleaning, electrical, and plumbing services, offering a premium user experience with a modern, glassmorphism-inspired design.

## 🚀 Project Overview

The application is built using **React 18** and **TypeScript**, powered by **Vite** for optimized performance. It features a fully modular architecture where all textual content, service lists, and image paths are managed through centralized JSON files, making the platform extremely easy to scale and maintain.

---

## 📁 Project Structure & File Details

### Core Infrastructure
- **`index.html`**: The static entry point for the browser. It contains the `<div id="root">` where the React application is mounted.
- **`src/main.tsx`**: The JavaScript entry point. It initializes the React root and renders the `App` component into the DOM.
- **`src/App.tsx`**: The root component that handles global application logic, including the **React Router** configuration and global layout (Navbar & Footer).
- **`src/index.css`**: Contains the global design system, CSS variables, and core layout utilities.

### 🧩 Components (`src/components/`)
- **`Navbar.tsx`**: A responsive navigation bar featuring a data-driven **Mega Menu** for service categories and a mobile-optimized drawer.
- **`Footer.tsx`**: A professional footer containing quick links, contact information, and branding.
- **`HeroSlider.tsx`**: An interactive, auto-transitioning image slider for the landing page hero section.
- **`BookingForm.tsx`**: A comprehensive service request form that dynamically populates areas and services from the data layer.

### 📄 Pages (`src/pages/`)
- **`Home.tsx`**: The main landing page, assembling the slider, booking form, top services showcase, and affiliation section.
- **`Services.tsx`**: A detailed directory of all available services categorized by type.
- **`Reviews.tsx`**: A gallery of customer testimonials featuring ratings and feedback.
- **`BecomeTasker.tsx`**: A recruitment landing page for skilled professionals to join the platform.

### 📊 Data Layer (`src/data/`)
This project follows a "Data-First" approach where all content is decoupled from the UI:
- **`home.json`**: Manages slider content, booking form fields, and top services.
- **`services.json`**: Contains the complete hierarchy of service categories and items.
- **`reviews.json`**: Stores customer feedback data.
- **`become-a-tasker.json`**: Manages recruitment header content and contact details.

### 🎨 Styles & Types
- **`src/styles/`**: Contains component-specific CSS files to ensure styles are modular and easy to manage.
- **`src/types/`**: Defines TypeScript interfaces (`index.ts`) to ensure full type safety for all JSON data throughout the app.

---

## 🛠️ Development & Deployment

### Installation
```bash
npm install
```

### Local Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

---

## 📞 Contact Information
For support or inquiries regarding the platform, please refer to the contact details maintained in `src/data/become-a-tasker.json`.
