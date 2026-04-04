# Modern Portfolio - Frontend

A beautiful, modern portfolio built with React, Vite, and Tailwind CSS featuring dark/light mode toggle.

## Features

- ⚡️ **Vite** - Lightning-fast build tool
- ⚛️ **React 18** - Latest React features
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🌓 **Dark/Light Mode** - Seamless theme switching with localStorage persistence
- 📱 **Responsive Design** - Mobile-first approach
- ✨ **Modern UI Components** - Hero, About, Projects, Contact sections
- 🔗 **API Integration Ready** - Configured proxy for Spring Boot backend

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
cd frontend
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── Header.jsx      - Navigation with theme toggle
│   │   ├── Hero.jsx        - Hero section
│   │   ├── About.jsx       - About section
│   │   ├── Projects.jsx    - Projects showcase
│   │   └── Contact.jsx     - Contact form
│   ├── contexts/
│   │   └── ThemeContext.jsx - Dark mode context provider
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Theme Toggle

The app includes a built-in dark mode toggle that:
- Persists user preference in localStorage
- Respects system preferences on first visit
- Uses Tailwind's `dark` class for styling

## API Integration

The app is configured to proxy API requests to `http://localhost:8080` (Spring Boot backend). Update `vite.config.js` if needed.

## Customization

- Update hero content in `Hero.jsx`
- Add projects in `Projects.jsx`
- Customize colors in `tailwind.config.js`
- Modify fonts and spacing in Tailwind config

## License

MIT
