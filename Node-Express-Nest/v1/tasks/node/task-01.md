---
topic: "NODE JS"
taskNumber: 1
---

# Task 01: Implement a Custom Event Emitter

Build a simple pub-sub system using Node.js `EventEmitter`. Simulate a basic messaging system where listeners react to specific events.

## Requirements

### Core Functionality

1. **Create a Custom Event Emitter Class**

   - Extend Node.js built-in `EventEmitter`
   - Add custom methods for your messaging system

2. **Implement Basic Messaging System**

   - Create methods to send messages
   - Create methods to subscribe to different message types
   - Handle multiple listeners for the same event

3. **Event Types to Support**
   - `message`: Basic text message
   - `notification`: System notification
   - `alert`: Important alert message
   - `user-joined`: User joining the system
   - `user-left`: User leaving the system

### Implementation Details

**Step 1. Message Structure**

```javascript
{
  id: string,
  type: 'message' | 'notification' | 'alert',
  content: string,
  timestamp: Date,
  sender?: string
}
```

**Step 2. Required Methods**

- `sendMessage(type, content, sender)`: Send a message
- `subscribeToMessages(callback)`: Subscribe to all message types
- `subscribeToType(type, callback)`: Subscribe to specific message type
- `getUserCount()`: Get current number of active users
- `getMessageHistory()`: Get last 10 messages
- `clearHistory()`: Clear message history
- `getStats()`: Get system statistics (e.g., message count, user count)

**Step 3. User Management**

- `addUser(username)`: Add user to the system
- `removeUser(username)`: Remove user from the system
- `getActiveUsers()`: Get list of active users

## Document Your Work

After completing all previous steps, you must document your work in the file `solutions/task-01.txt`:

- include a brief description of your implementation
- explain how to run your solution
- provide `.js` file with your implementation

## Bonus Points

- Add message persistence (save to file)
- Implement message filtering/search
- Add rate limiting for message sending
- Create different user roles with permissions
