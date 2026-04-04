# Getting Started - Modern Portfolio

## ✅ Installation Complete!

Both frontend and backend are fully scaffolded and dependencies are installed.

## Quick Start

### Option 1: Use VS Code Tasks (Recommended)

1. Open the workspace in VS Code
2. Go to **Terminal → Run Task**
3. Select one of these tasks:
   - **"Frontend: Dev Server"** - Start React dev server (http://localhost:5173)
   - **"Backend: Spring Boot Run"** - Start Spring Boot API (http://localhost:8080)
   - **"All: Frontend + Backend (Dev)"** - Start both simultaneously

### Option 2: Manual Commands

#### Terminal 1 - Frontend
```bash
cd frontend
npm run dev
```
Open browser: **http://localhost:5173** or **http://localhost:3000**

#### Terminal 2 - Backend
```bash
cd backend
mvn spring-boot:run
```
API running: **http://localhost:8080**

## 🎨 Frontend Setup

**Location:** `frontend/`

### Features
- React 18 with Vite (hot reload)
- Tailwind CSS for styling
- Dark/Light mode toggle
- Responsive design
- Lucide React icons

### Available Scripts
```bash
npm run dev      # Start dev server
npm run build    # Create production build
npm run preview  # Preview production build locally
```

### File Structure
```
frontend/
├── src/
│   ├── components/       # React components
│   ├── contexts/        # Theme context
│   ├── App.jsx          # Main app
│   └── index.css        # Tailwind imports
├── index.html           # HTML entry
├── vite.config.js       # Vite config
└── tailwind.config.js   # Tailwind config
```

### Customization
- **Colors**: Edit `tailwind.config.js` theme section
- **Content**: Edit components in `src/components/`
- **Fonts**: Update `src/index.css`
- **Dark Mode**: Handled by ThemeContext in `src/contexts/ThemeContext.jsx`

## 🚀 Backend Setup

**Location:** `backend/`

### Features
- Spring Boot 3.1
- Spring Data JPA + Hibernate
- H2 in-memory database
- REST API (Projects CRUD)
- CORS enabled for localhost:3000 and localhost:5173

### Available Commands
```bash
mvn clean install       # Clean and install dependencies
mvn spring-boot:run     # Run Spring Boot server
mvn test                # Run unit tests
mvn clean package       # Build production JAR
```

### API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/health | Health check |
| GET | /api/projects | Get all projects |
| GET | /api/projects/{id} | Get project by ID |
| POST | /api/projects | Create new project |
| PUT | /api/projects/{id} | Update project |
| DELETE | /api/projects/{id} | Delete project |

### H2 Database Console
After starting the backend, visit: **http://localhost:8080/h2-console**
- JDBC URL: `jdbc:h2:mem:testdb`
- Username: `sa`
- Password: (leave blank)

### File Structure
```
backend/
├── src/main/java/com/portfolio/
│   ├── controller/      # REST endpoints
│   ├── service/         # Business logic
│   ├── entity/          # JPA entities
│   ├── dto/             # Data transfer objects
│   ├── repository/      # Data access
│   ├── config/          # Configuration (CORS)
│   └── PortfolioApplication.java
├── src/test/java/       # Unit tests
└── pom.xml              # Maven dependencies
```

## 📝 Project Structure

```
mp/
├── frontend/            # React + Tailwind CSS + Dark Mode
├── backend/             # Spring Boot REST API
├── .github/
│   └── copilot-instructions.md
├── .vscode/
│   ├── tasks.json       # VS Code tasks
│   ├── settings.json    # VS Code settings
│   └── extensions.json  # Recommended extensions
├── README.md            # Project overview
├── setup.bat            # Windows setup script
├── setup.sh             # macOS/Linux setup script
└── .gitignore
```

## 🔗 API Integration

Frontend automatically proxies API calls to backend:
- Frontend makes request to `/api/projects`
- Vite config forwards to `http://localhost:8080/api/projects`

No changes needed - it's pre-configured!

## 🌓 Dark Mode Features

- **Auto-detect**: Respects system preference on first visit
- **Toggle**: Click moon/sun icon in header
- **Persistent**: User choice saved in localStorage
- **Smooth**: CSS transitions between themes
- **Complete**: All components styled for dark mode

## 📦 Technologies Used

**Frontend:**
- ⚛️ React 18
- ⚡ Vite
- 🎨 Tailwind CSS
- 🎯 Lucide React (icons)

**Backend:**
- 🍃 Spring Boot 3.1
- 📊 Spring Data JPA
- 🗄️ H2 Database
- 🔨 Maven

## 🎯 Next Steps

1. **Customize Content**
   - Edit components in `frontend/src/components/`
   - Update project data via backend API
   - Modify colors in `tailwind.config.js`

2. **Build Features**
   - Add authentication (Spring Security)
   - Connect to real database (PostgreSQL, MySQL)
   - Add more API endpoints
   - Deploy to cloud (Vercel, Railway, Render, etc.)

3. **Deploy**
   - Frontend: Vercel, Netlify, GitHub Pages
   - Backend: Railway, Render, Heroku, AWS

## 🔧 Environment Setup

### Prerequisites Installed?
- ✅ Node.js (v14+)
- ✅ Java 17+
- ✅ Maven 3.6+
- ✅ npm packages installed
- ✅ Maven dependencies downloaded

### Running Into Issues?

**Frontend won't start:**
```bash
cd frontend
rm -rf node_modules
npm install
npm run dev
```

**Backend won't compile:**
```bash
cd backend
mvn clean install -DskipTests
mvn spring-boot:run
```

## 📞 Support

- Frontend errors: Check browser console (F12)
- Backend errors: Check terminal output
- Dependencies: Ensure Java 17 and Node.js are installed
- Port conflicts: Change ports in config files if needed

## 🎉 You're All Set!

Start coding your modern portfolio now. Happy developing! 🚀
