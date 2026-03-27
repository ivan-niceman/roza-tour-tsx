# Roza-Tour — Travel Agency Website

A modern website for Roza-Tour travel agency based in Belgorod, Russia. Built with React + TypeScript + Vite.

## 🌐 Live Demo

[roza-tour.ru](https://roza-tour.ru)

## 🚀 Tech Stack

- **React 18** — UI library
- **TypeScript** — type safety
- **Vite** — build tool
- **React Router v6** — client-side routing
- **Swiper** — mobile slider
- **@fancyapps/ui** — image gallery with lightbox
- **Autoprefixer + PostCSS** — CSS cross-browser support

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/ivan-niceman/roza-tour-tsx.git

# Navigate to project directory
cd roza-tour

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder. Upload all files including `send.php` to your server.

## 📧 Contact Form Setup

The contact form uses PHP `mail()` function. To enable it:

1. Upload `public/send.php` to your server
2. Update the recipient email in `send.php`:

## 🔧 Server Configuration

For correct React Router behaviour on page refresh, add `.htaccess` to the server root:

```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ index.html [QSA,L]
```

Private project. All rights reserved.
