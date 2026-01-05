# Alumni Registration Backend

This is the backend API server for the Air Force School Hindan Alumni Registration system.

## Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   # For development (with auto-restart)
   npm run dev
   
   # For production
   npm start
   ```

The server will start on port 3001 by default.

## API Endpoints

### POST /api/alumni/register
Register a new alumni member.

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "phone": "+1234567890",
  "batchYear": "2010",
  "passingYear": "2012",
  "currentOccupation": "Software Engineer",
  "company": "Tech Company",
  "designation": "Senior Developer",
  "address": "123 Main St",
  "city": "New York",
  "state": "NY",
  "country": "USA",
  "achievements": "Dean's List",
  "message": "Looking forward to connecting with alumni"
}
```

### GET /api/alumni/check-email?email=user@example.com
Check if an email is already registered.

### GET /api/alumni/directory
Get approved alumni for public directory.

### GET /api/alumni/all
Get all alumni registrations (admin only).

### PUT /api/alumni/:id/status
Update alumni status (admin only).

## Data Storage

The alumni data is stored in a JSON file at `data/alumni.json`. In production, you should replace this with a proper database like MongoDB or PostgreSQL.

## Environment Variables

- `PORT`: Server port (default: 3001)

## Health Check

The server provides a health check endpoint at `/health`.

## CORS

The server is configured to accept requests from the frontend application.

## Error Handling

All API endpoints return consistent error responses with appropriate HTTP status codes.
