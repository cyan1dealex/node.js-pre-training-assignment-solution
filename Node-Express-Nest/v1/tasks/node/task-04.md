---
topic: "NODE JS"
taskNumber: 4
---

# Task 04: Build a Mini HTTP Server for ToDos

Create a RESTful API using Node's built-in `http` module and `url` parsing. Support full CRUD operations using in-memory storage and manually handle routing based on HTTP method and path.

## Requirements

### Core Functionality

1. **HTTP Server Setup**

   - Use Node.js built-in `http` module
   - Handle different HTTP methods (GET, POST, PUT, DELETE)
   - Parse URL paths and query parameters manually
   - Handle JSON request bodies

2. **ToDo Data Structure**

   ```javascript
   {
     id: number,
     title: string,
     description: string,
     completed: boolean,
     createdAt: Date,
     updatedAt: Date
   }
   ```

3. **Required API Endpoints**
   | Method | Path | Description |
   | ------ | ----------------------- | --------------------------------- |
   | GET | `/todos` | Get all todos |
   | GET | `/todos/:id` | Get specific todo |
   | POST | `/todos` | Create new todo |
   | PUT | `/todos/:id` | Update existing todo |
   | DELETE | `/todos/:id` | Delete todo |
   | GET | `/todos?completed=true` | Filter todos by completion status |

### Implementation Requirements

**Step 1: Server Class Structure**

- Create `TodoServer` class with constructor accepting port
- Implement `start()` method to create and start HTTP server
- Handle requests through `handleRequest()` method

**Step 2: Request Processing**

- Parse JSON request bodies asynchronously
- Extract path parameters (e.g., `:id` from `/todos/123`)
- Parse query parameters for filtering
- Handle malformed JSON gracefully

**Step 3: Response Handling**

- Set appropriate HTTP status codes (200, 201, 400, 404, 405, 500)
- Set `Content-Type: application/json`
- Include CORS headers for web client compatibility
- Return consistent JSON response format

**Step 4: CRUD Operations**

- `GET /todos` - Return all todos with optional filtering
- `GET /todos/:id` - Return specific todo or 404
- `POST /todos` - Create new todo with validation
- `PUT /todos/:id` - Update existing todo (partial updates allowed)
- `DELETE /todos/:id` - Remove todo from storage

**Step 5: Data Validation**

- **Title**: Required, string, 1-100 characters, not only whitespace
- **Description**: Optional, string, max 500 characters
- **Completed**: Optional, boolean only, defaults to false

### Expected Response Formats

#### Success Responses

```javascript
// GET /todos
{ "success": true, "data": [...], "count": 2 }

// GET /todos/:id
{ "success": true, "data": {...} }

// POST /todos
{ "success": true, "data": {...} }

// PUT /todos/:id
{ "success": true, "data": {...} }

// DELETE /todos/:id
{ "success": true, "message": "Todo deleted successfully" }
```

#### Error Responses

```javascript
// 404 Not Found
{ "success": false, "error": "Todo not found" }

// 400 Bad Request
{ "success": false, "error": "Invalid JSON" }

// 405 Method Not Allowed
{ "success": false, "error": "Method not allowed" }
```

## Testing Your Implementation

After implementing your solution, test it by running:

```bash
node task-04-test.js
```

The test suite will verify:

- All CRUD operations work correctly
- Proper HTTP status codes are returned
- JSON response format is consistent
- Error handling works as expected
- Data validation is implemented

### Manual Testing Examples

```bash
# Start your server first
node task-04.js

# Then test endpoints
curl http://localhost:3000/todos
curl -X POST http://localhost:3000/todos -H "Content-Type: application/json" -d '{"title":"Test Todo"}'
curl -X PUT http://localhost:3000/todos/1 -H "Content-Type: application/json" -d '{"completed":true}'
curl -X DELETE http://localhost:3000/todos/1
```

## Your Tasks

1. **Implement TodoServer Class**

   - Set up HTTP server with proper request routing
   - Handle different HTTP methods appropriately
   - Implement in-memory data storage

2. **Create Helper Functions**

   - `parseBody(req)` for JSON request parsing
   - `parsePathParams(pattern, path)` for URL parameter extraction
   - `sendResponse(res, statusCode, data)` for consistent responses

3. **Implement CRUD Operations**

   - Create comprehensive todo management functionality
   - Add proper data validation and error handling
   - Support query parameter filtering

4. **Add Error Handling**
   - Handle malformed JSON requests
   - Return appropriate HTTP status codes
   - Provide meaningful error messages

## Expected Output Format

Your server should handle requests like:

```
=== Todo Server Started ===
Server running on http://localhost:3000

=== Request Log ===
GET /todos -> 200 OK (2 todos)
POST /todos -> 201 Created (new todo: id=3)
PUT /todos/1 -> 200 OK (updated todo: id=1)
DELETE /todos/2 -> 200 OK (deleted todo: id=2)
GET /todos/999 -> 404 Not Found
```

## Document Your Work

After completing all previous steps, you must document your work in the file `solutions/task-04.txt`:

- Include a brief description of your implementation
- Explain how to run your solution
- Provide `.js` files with your implementations

## Bonus Points

- Add request logging middleware
- Implement request rate limiting
- Add data persistence to file system
- Create HTML client interface
- Add request validation middleware
- Support for OPTIONS method (CORS preflight)
