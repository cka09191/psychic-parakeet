# Next.js OpenAPI Test App

A simple test application demonstrating OpenAPI (Swagger) integration with Next.js 14+. This project provides a practical example of how to create, document, and visualize RESTful APIs using OpenAPI specifications in a modern Next.js application.

## Features

- **OpenAPI 3.0 Specification**: Fully documented API with OpenAPI standard
- **Interactive API Documentation**: Swagger UI integration for testing endpoints
- **Sample API Endpoints**: Working examples including GET and POST operations
- **TypeScript Support**: Full type safety throughout the application
- **Modern Stack**: Built with Next.js 14+ App Router and Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/cka09191/psychic-parakeet.git
cd psychic-parakeet
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── api/
│   │   ├── hello/          # Simple hello endpoint
│   │   ├── users/          # CRUD operations for users
│   │   └── openapi/        # OpenAPI specification endpoint
│   ├── api-docs/           # Swagger UI page
│   └── page.tsx            # Home page
├── public/                 # Static assets
└── README.md
```

## API Endpoints

### GET /api/hello
Returns a simple hello message with timestamp.

**Response:**
```json
{
  "message": "Hello from Next.js!",
  "timestamp": "2025-10-16T04:14:27.135Z"
}
```

### GET /api/users
Retrieves a list of sample users.

**Response:**
```json
[
  { "id": 1, "name": "John Doe", "email": "john@example.com" },
  { "id": 2, "name": "Jane Smith", "email": "jane@example.com" }
]
```

### POST /api/users
Creates a new user.

**Request Body:**
```json
{
  "name": "New User",
  "email": "newuser@example.com"
}
```

**Response:**
```json
{
  "id": 4,
  "name": "New User",
  "email": "newuser@example.com"
}
```

### GET /api/openapi
Returns the complete OpenAPI specification in JSON format.

## Viewing API Documentation

Visit [http://localhost:3000/api-docs](http://localhost:3000/api-docs) to access the interactive Swagger UI where you can:

- View all available endpoints
- See detailed request/response schemas
- Test API endpoints directly from the browser
- Download the OpenAPI specification

## Technologies Used

- **Next.js 14+**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Swagger UI React**: Interactive API documentation
- **OpenAPI 3.0**: API specification standard

## Development

### Building for Production

```bash
npm run build
```

### Running Production Build

```bash
npm start
```

### Linting

```bash
npm run lint
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [OpenAPI Specification](https://swagger.io/specification/)
- [Swagger UI](https://swagger.io/tools/swagger-ui/)

## License

This project is open source and available under the MIT License.
