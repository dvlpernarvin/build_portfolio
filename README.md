<div align="center"><h1>DVLPER_SITE - Modern Portfolio Website</h1></div>

![Portfolio Banner](https://img.shields.io/badge/Portfolio-Narvin%20Sachaniya-blue)
![Next.js](https://img.shields.io/badge/Next.js-15.2.0-black)
![React](https://img.shields.io/badge/React-19.0.0--rc-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![GSAP](https://img.shields.io/badge/GSAP-3.12.5-green)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.15-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## 🚀 Overview

A modern, high-performance portfolio website built with Next.js 15, React 19, TypeScript, and GSAP animations. This portfolio showcases professional experience, projects, skills, and certifications with a focus on performance, accessibility, and stunning visual effects.

## ✨ Features

- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Modern UI/UX**: Clean, professional interface with smooth animations and transitions
- **Advanced Animations**: Particle background, custom cursor, and GSAP-powered animations
- **Performance Optimized**: Built with Next.js 15 and Turbopack for lightning-fast loading
- **SEO Friendly**: Optimized metadata and semantic HTML structure
- **Google Analytics**: Integrated tracking for visitor insights
- **Smooth Scrolling**: Implemented with Lenis for butter-smooth page navigation
- **Interactive Components**: Dynamic project showcases and skill displays
- **Accessibility**: Designed with a11y best practices in mind
- **Dark Mode**: Stylish dark theme for comfortable viewing

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15.2.0 with App Router
- **UI Library**: React 19.0.0-rc
- **Styling**: TailwindCSS 3.4.15 with custom animations
- **Animations**: GSAP 3.12.5, @gsap/react
- **Smooth Scroll**: Lenis
- **Icons**: Lucide React
- **Typography**: Google Fonts (Anton, Roboto Flex)

### Development Tools
- **Language**: TypeScript 5.x
- **Linting**: ESLint
- **Code Formatting**: Prettier
- **SVG Processing**: SVGR
- **Build Tool**: Turbopack

### Analytics
- **Tracking**: Google Analytics 4 via @next/third-parties

## 📂 Project Structure

```
├── app/                  # Next.js App Router
│   ├── _components/      # Page-specific components
│   ├── projects/         # Project detail pages
│   ├── resume/           # Resume page
│   ├── layout.tsx        # Root layout with providers
│   └── page.tsx          # Homepage
├── components/           # Reusable UI components
│   ├── icons/            # SVG icons
│   └── ...               # Various UI components
├── lib/                  # Utility functions and data
│   ├── data.ts           # Portfolio content
│   └── utils.ts          # Helper functions
├── public/               # Static assets
│   ├── certificates/     # Certification images
│   ├── logo/             # Technology logos
│   ├── model/            # 3D models
│   └── projects/         # Project images
└── types/                # TypeScript type definitions
```

## 🔥 Key Features Explained

### Particle Background
A mesmerizing background effect created with GSAP animations that adds depth and visual interest to the site without compromising performance.

### Custom Cursor
Enhanced user experience with a custom cursor that responds to interactive elements, providing subtle feedback and visual delight.

### Smooth Scrolling
Implemented with Lenis for a premium scrolling experience that feels natural and responsive across all content sections.

### Project Showcase
Dynamic project cards with detailed information, technologies used, and visual previews of each project with links to live demos and source code.

### Interactive Skills Display
Visually appealing representation of technical skills categorized by frontend, backend, database, and tools with custom icons.

### Preloader Animation
Engaging loading animation that ensures a polished first impression while the site assets are being prepared.

## 📊 Performance Optimizations

- **Next.js App Router**: Leveraging the latest Next.js features for optimal routing and rendering
- **Turbopack**: Faster development and build times
- **Image Optimization**: Properly sized and formatted images for faster loading
- **Code Splitting**: Automatic code splitting for smaller initial load
- **Font Optimization**: Efficient loading of Google Fonts with proper subsetting
- **Minimal Dependencies**: Carefully selected dependencies to keep bundle size small

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/DVLPER_SITE.git
cd DVLPER_SITE

# Install dependencies
npm install

# Start development server with Turbopack
npm dev

# Build for production
npm build

# Start production server
npm start
```

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```
NEXT_PUBLIC_GA_MEASUREMENT_ID=your-ga4-id
```

## 📱 Responsive Design

The portfolio is fully responsive with carefully crafted breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

## 🎨 Customization

### Content
Edit the `lib/data.ts` file to update:
- Personal information
- Social links
- Projects
- Skills
- Experience
- Certificates

### Styling
Customize the look and feel by modifying:
- `tailwind.config.ts` for theme settings
- `app/globals.css` for global styles
- Individual component styles

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔗 Connect

- Portfolio: [Your Portfolio URL]
---

Designed and developed with ❤️ by Narvin_Sachaniya
