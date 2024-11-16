# Personal Portfolio

This is a personal portfolio website built with React, TypeScript, Tailwind CSS, and Vite. It showcases my projects, skills, and experiences in a modern, responsive design.

## Technologies Used

- React: A JavaScript library for building user interfaces
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript
- Tailwind CSS: A utility-first CSS framework for rapidly building custom designs
- Vite: A build tool that aims to provide a faster and leaner development experience for modern web projects

## Features

- Responsive design that looks great on desktop and mobile

## Getting Started

### Prerequisites

Make sure you have Node.js (version 14 or later) and pnpm installed on your machine.

If you don't have pnpm installed, you can install it by running:

```
npm install -g pnpm
```

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/getparas/personal-portfolio.git
   ```

2. Navigate to the project directory:

   ```
   cd personal-portfolio
   ```

3. Install the dependencies:
   ```
   pnpm install
   ```

### Running the Development Server

To start the development server, run:

```
pnpm dev
```

This will start the Vite development server. Open your browser and navigate to `http://localhost:5173` to view your portfolio.

### Building for Production

To create a production build, run:

```
pnpm build
```

This will generate optimized files in the `dist` directory.

### Previewing the Production Build

To preview the production build locally, run:

```
pnpm preview
```

## Customization

- Update the content in the `src/data` directory to reflect your personal information, projects, and skills.
- Modify the components in the `src/components` directory to change the layout or add new sections.
- Adjust the Tailwind CSS classes in your components to customize the look and feel of your portfolio.
- Extend the Tailwind configuration in `tailwind.config.js` to add custom colors, fonts, or other design tokens.

## Deployment

This project can be easily deployed to platforms like Vercel, Netlify, or GitHub Pages. Refer to their respective documentation for detailed deployment instructions.
