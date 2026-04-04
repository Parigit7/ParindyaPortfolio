# Modern Portfolio - Backend

A simple Node.js/Express REST API for the Modern Portfolio contact form.

## Features

- ⚡️ **Express.js** - Lightweight web framework
- 📧 **Email Sending** - Nodemailer for Gmail integration
- 🔐 **CORS Enabled** - Configured for frontend communication
- 📝 **Contact API** - POST /api/contact endpoint
- 🚀 **Fast & Simple** - Minimal dependencies, quick startup

## Getting Started

### Prerequisites

- Node.js 14+ and npm

### Installation

```bash
cd backend
npm install
```

### Development

```bash
npm start          # Start the server
```

Or with auto-reload:
```bash
npm run dev        # Requires nodemon (dev dependency)
```

The API will be available at `http://localhost:8080`

## Project Structure

```
backend/
├── server.js       - Main Express server
├── package.json    - Dependencies
├── .env           - Environment variables (Gmail config)
└── node_modules/  - Installed dependencies
│   │   │   ├── config/
│   │   │   │   └── CorsConfig.java          - CORS configuration
│   │   │   ├── controller/
│   │   │   │   ├── ProjectController.java   - Project REST endpoints
│   │   │   │   └── HealthController.java    - Health check endpoint
│   │   │   ├── service/
│   │   │   │   └── ProjectService.java      - Business logic
│   │   │   ├── repository/
│   │   │   │   └── ProjectRepository.java   - Data access
│   │   │   ├── entity/
│   │   │   │   └── Project.java             - Project entity
│   │   │   └── dto/
│   │   │       └── ProjectDTO.java          - Data transfer object
│   │   └── resources/
│   │       └── application.properties       - Configuration
│   └── test/
└── pom.xml
```

## API Endpoints

### Health Check
- `GET /api/health` - Check API status

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/{id}` - Get project by ID
- `POST /api/projects` - Create new project
- `PUT /api/projects/{id}` - Update project
- `DELETE /api/projects/{id}` - Delete project

## Sample Project Request

```json
{
  "title": "Modern Portfolio",
  "description": "A full-stack portfolio application",
  "imageUrl": "https://example.com/image.jpg",
  "demoLink": "https://demo.example.com",
  "githubLink": "https://github.com/example/portfolio",
  "technologies": "React, Tailwind CSS, Spring Boot"
}
```

## Database

- **Type**: H2 (In-memory)
- **Console**: Available at `http://localhost:8080/h2-console`
- **JDBC URL**: `jdbc:h2:mem:testdb`
- **Username**: `sa`
- **Password**: (leave blank)

## CORS

Configured for:
- `http://localhost:3000` (Vite dev server)
- `http://localhost:5173` (Alternative Vite port)

## License

MIT
