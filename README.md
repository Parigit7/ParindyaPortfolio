# Modern Portfolio

A super modern, full-stack portfolio application featuring:

## 🎨 Features

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS with utility-first approach
- **Dark/Light Mode**: Seamless theme switching with localStorage persistence
- **Backend**: Spring Boot 3.1 REST API
- **Database**: H2 (in-memory) for development
- **Responsive**: Mobile-first design that works on all devices
- **Modern UI**: Beautiful components with smooth transitions

## 📁 Project Structure

```
mp/
├── frontend/                (React + Vite + Tailwind CSS + Dark Mode)
│   ├── src/
│   │   ├── components/      (Header, Hero, About, Projects, Contact)
│   │   ├── contexts/        (Theme context for dark mode)
│   │   ├── App.jsx
│   │   └── index.css        (Tailwind imports)
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── README.md
│
├── backend/                 (Spring Boot REST API)
│   ├── src/
│   │   ├── main/java/com/portfolio/
│   │   │   ├── controller/  (REST endpoints)
│   │   │   ├── service/     (Business logic)
│   │   │   ├── entity/      (JPA entities)
│   │   │   ├── dto/         (Data transfer objects)
│   │   │   ├── config/      (CORS configuration)
│   │   │   └── PortfolioApplication.java
│   │   └── resources/
│   │       └── application.properties
│   ├── pom.xml
│   └── README.md
│
└── .github/
    └── copilot-instructions.md
```

## 🚀 Getting Started

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Visit `http://localhost:3000` or `http://localhost:5173`

### Backend Setup

```bash
cd backend
mvn clean install
mvn spring-boot:run
```

API runs on `http://localhost:8080`

## 🎨 Font/Color Customization

Edit `frontend/tailwind.config.js` to customize:
- Primary colors
- Font family
- Spacing
- Breakpoints
- And more!

## 🔗 API Integration

The frontend is pre-configured to proxy API calls to the backend:
- Frontend: `http://localhost:3000` 
- Backend: `http://localhost:8080`
- API calls made to `/api/` are forwarded to `http://localhost:8080/api/`

## 🌓 Dark Mode

- Automatically detects system preference on first visit
- User preference is saved to localStorage
- Toggle button in header
- Smooth transitions between themes
- All components fully styled for dark mode

## 📱 Components

- **Header**: Navigation with dark mode toggle
- **Hero**: Eye-catching landing section
- **About**: Skills and expertise showcase
- **Projects**: Project showcase with links
- **Contact**: Contact form and social links
- **Footer**: Copyright information

## 📦 Tech Stack

**Frontend:**
- React 18
- Vite
- Tailwind CSS
- Lucide React (Icons)

**Backend:**
- Spring Boot 3.1
- Spring Data JPA
- H2 Database
- Maven
- Lombok

## 📄 License

MIT

## 🤝 Contributing

Feel free to customize and extend this portfolio template!

### Tips:
1. Replace placeholder content with your own
2. Update project cards with your actual projects
3. Add your social media links in the Contact section
4. Customize colors in Tailwind config
5. Deploy frontend to Vercel, Netlify, or GitHub Pages
6. Deploy backend to Heroku, Railway, or AWS
