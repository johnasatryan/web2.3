# Web 2.3 Group Repository

Welcome to the Web 2.3 Group Repository! This repository is designed to help you learn and practice backend development with Node.js from scratch through classworks, exercises, and curated resources.

## Course Overview

This course is designed to provide a strong and practical foundation in backend development. Students will learn how servers work, how APIs are built, how data is stored and retrieved, and how modern backend systems are designed, tested, and deployed. The course is hands-on, with incremental projects and assignments.

## Repository Structure

The repository contains the following folders:

### 1. Classworks

This folder contains all the classwork materials provided during sessions, organized by topic to match the syllabus below.

**Examples:**

- 1_nodejs_fundamentals/
- 2_intro_to_backend/
- 3_http_fundamentals/
- 6_express_framework/
- 16_mongodb/
- 23_websockets/

### 2. Exercises

This folder contains additional exercises to reinforce your learning. These exercises range from beginner to advanced levels, encouraging hands-on practice.

### 3. Resources

This folder includes curated resources such as articles, tutorials, datasets, and useful links to help deepen your understanding of backend development.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/johnasatryan/web2.3.git
   ```

2. Navigate to the repository folder and install dependencies:

   ```bash
   cd web2.3
   npm install
   ```

## Syllabus

### 1. Introduction to Node.js

- What Node.js is and why it exists
- JavaScript runtime outside the browser
- Event-driven and non-blocking I/O
- Installing Node.js
- npm and package.json
- node_modules structure
- Running scripts

**Practice:** Create a simple Node.js application. Use npm to install and use a package.

### 2. Introduction to Backend

- What is backend development
- Client–server architecture
- Role of the backend in web applications
- Server responsibilities
- APIs and data flow
- Databases and persistence
- Backend vs frontend vs full-stack

**Practice:** Analyze a simple web request lifecycle. Identify backend components in a real-world application.

### 3. HTTP Fundamentals

- What is HTTP
- Request–response model
- URL structure
- HTTP methods (GET, POST, PUT, DELETE, PATCH)
- HTTP headers
- Request body and response body
- Status codes
- Statelessness

**Practice:** Manually craft HTTP requests. Analyze real HTTP requests and responses.

### 4. Postman

- What Postman is used for
- Sending HTTP requests
- Headers and body configuration
- Environment variables
- Collections
- Testing APIs manually

**Practice:** Test public APIs using Postman. Create a Postman collection for a sample API.

### 5. Node.js `http` Module

- Core Node.js modules
- Creating an HTTP server
- Handling incoming requests
- Routing manually
- Request and response objects
- Setting headers and status codes

**Practice:** Build a basic HTTP server without frameworks. Handle multiple routes manually.

### 6. Express Framework

- Why Express exists
- Express application structure
- Creating a server with Express
- `app.get`, `app.post`, `app.put`, `app.delete`
- Request and response helpers

**Practice:** Rewrite the Node `http` server using Express.

### 7. File Operations

- File system basics
- Reading and writing files
- Synchronous vs asynchronous file operations
- JSON file handling

**Practice:** Store and retrieve data from files.

### 8. RESTful API Design

- REST principles
- Resources and endpoints
- Proper HTTP method usage
- Status codes in REST
- Request validation
- Error handling

**Practice:** Design REST endpoints for a simple system.

### 9. JSON Files as a Database (Project)

- Using JSON files as persistent storage
- CRUD operations
- Data consistency concerns
- Limitations of file-based storage

**Project:** Build a small REST API using JSON files as the database.

### 10. Sample Project Implementation

- Project structure
- Controllers and services
- Separating logic
- Error handling patterns

**Practice:** Implement a complete small backend project.

### 11. Express Routing

- Router object
- Route grouping
- Route parameters
- Query parameters
- Modular routing

**Practice:** Refactor routes into separate router files.

### 12. Express Middlewares

- What middleware is
- Request lifecycle
- Built-in middlewares
- Custom middleware
- Error-handling middleware

**Practice:** Implement logging and validation middleware.

### 13. Authorization and Authentication

- Authentication vs authorization
- Basic authentication concepts
- Token-based authentication
- API keys
- Access control

**Practice:** Protect routes using authentication middleware.

### 14. EJS and Static Files

- Server-side rendering concepts
- EJS templates
- Passing data to views
- Static files (CSS, JS, images)

**Practice:** Build a simple server-rendered page.

### 15. Databases – Introduction

- What is a database
- Relational vs NoSQL databases
- When to use each
- Data modeling basics

### 16. MongoDB

- MongoDB basics
- Documents and collections
- BSON
- MongoDB CRUD operations

**Practice:** Perform CRUD operations directly in MongoDB.

### 17. Mongoose (Part 1)

- ODM concept
- Schemas and models
- Validation
- Basic queries

**Practice:** Integrate MongoDB with Express using Mongoose.

### 18. Mongoose (Part 2)

- Advanced queries
- Population
- Middleware (hooks)
- Indexes

**Practice:** Build relational-like data using MongoDB.

### 19. SQL CRUD

- Relational databases concepts
- Tables, rows, columns
- Primary and foreign keys
- SQL CRUD operations

**Practice:** Write SQL queries manually.

### 20. Sequelize (Part 1)

- ORM concept
- Models and migrations
- CRUD with Sequelize

**Practice:** Connect Express to an SQL database using Sequelize.

### 21. Sequelize (Part 2)

- Associations
- Transactions
- Advanced queries

**Practice:** Build relational models with Sequelize.

### 22. Database Indexing

- What indexes are
- Performance impact
- Indexes in SQL and NoSQL

**Practice:** Analyze query performance.

### 23. WebSockets

- HTTP vs WebSockets
- Real-time communication
- WebSocket lifecycle

**Practice:** Implement a simple WebSocket server.

### 24. Chat Application Development

- Real-time messaging
- Event handling
- Broadcasting messages

**Project:** Build a real-time chat application.

### 25. Backend Project Architecture

- Project structuring
- Separation of concerns
- Scalability considerations

### 26. Monolithic vs Microservices

- Monolithic architecture
- Microservices architecture
- Pros and cons

### 27. Microservices – Simple Project

- Service separation
- Communication between services
- Basic API gateway concept

**Project:** Build a simple microservices-based system.

### 28. Testing and Deploying

- Backend testing concepts
- Environment variables
- Deployment basics
- Production vs development

**Practice:** Deploy a backend application.

## Final Outcome

By the end of the course, students will be able to:

- Build RESTful APIs
- Work with both NoSQL and SQL databases
- Design scalable backend architectures
- Implement authentication and authorization
- Deploy and maintain backend services

### Happy learning!
