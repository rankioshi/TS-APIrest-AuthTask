<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Task Management API

This is a NestJS application that provides a RESTful API for task management. The app includes:

1. User authentication with JWT
2. Task CRUD operations
3. SQLite database with TypeORM
4. Swagger API documentation

## Project Structure

- `src/auth` - Authentication module with login and registration
- `src/users` - User module with user entity and service
- `src/tasks` - Task module with CRUD operations
- `src/common` - Shared utilities, guards, and decorators

## Development Guidelines

- Follow NestJS best practices
- Use TypeORM for database operations
- Implement proper validation for all DTOs
- Secure all task operations with JWT authentication
- Document all endpoints with Swagger decorators
