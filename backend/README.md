# Modern Portfolio - Backend

A Spring Boot REST API for the Modern Portfolio application.

## Features

- ⚡️ **Spring Boot 3.1** - Latest Spring Boot version
- 🗄️ **JPA/Hibernate** - ORM for database operations
- 🔄 **REST API** - RESTful endpoints for projects
- 🔐 **CORS Configuration** - Configured for frontend integration
- 🧪 **H2 Database** - In-memory database for development
- 📝 **Lombok** - Reduces boilerplate code
- ✅ **Validation** - Input validation support

## Getting Started

### Prerequisites

- Java 17 or higher
- Maven 3.6 or higher

### Installation

```bash
cd backend
mvn clean install
```

### Development

```bash
mvn spring-boot:run
```

The API will be available at `http://localhost:8080`

### Build

```bash
mvn clean package
```

## Project Structure

```
backend/
├── src/
│   ├── main/
│   │   ├── java/com/portfolio/
│   │   │   ├── PortfolioApplication.java    - Main entry point
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
