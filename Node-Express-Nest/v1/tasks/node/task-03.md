---
topic: "NODE JS"
taskNumber: 3
---

# Task 03: Event Loop Analysis & Async Debugging

Understand the Node.js event loop by working with async code snippets using `setTimeout`, `Promise`, `fs`, and callbacks. Trace execution order, fix logic bugs, and demonstrate understanding of event loop phases.

### Core Functionality

1. **Event Loop Theory Analysis**

   - Explain all 6 phases of the Node.js event loop
   - Understand microtasks vs macrotasks
   - Demonstrate execution order principles

2. **Execution Order Prediction**

   - Analyze complex async code snippets
   - Predict exact console output order
   - Explain reasoning behind execution sequence

3. **Debug Broken Async Code**
   - Fix race conditions in file operations
   - Convert callback hell to async/await
   - Resolve mixed promises/callbacks issues

## Event Loop Phases

**Step 1.1. Event Loop Analysis**

- Analyze the 6 phases of Node.js event loop
  1. **Timers Phase**
  2. **Pending Callbacks Phase**
  3. **Idle, Prepare Phase**
  4. **Poll Phase**
  5. **Check Phase**
  6. **Close Callbacks Phase**
- Predict execution order for provided code snippets
  - [Snippet 01](../../solutions//node/task-03/event-loop/snippet-01.js)
  - [Snippet 02](../../solutions//node/task-03/event-loop/snippet-02.js)
- Explain microtask vs macrotask priority

**Step 1.2. Event Loop Demonstration**

- `demonstrateEventLoop()`: Show all phases in action
- `analyzeExecutionOrder()`: Predict and verify output
- `createEventLoopDemo()`: Interactive demonstration

## Broken Code Snippets for Debugging

#### Step 2.1: [Race Condition](../../solutions//node/task-03/broken-code/snippet-01.js)

**Problem**

1. Race condition in file processing
2. Incorrect error handling
3. Missing await keywords
4. Array index might be wrong due to closure

**Your Task**

- Predict output for provided code snippets
- Explain reasoning based on event loop phases
- Create execution order analysis
- `fixRaceCondition()`: Fix file processing

#### 2.2: [Callback Hell](../../solutions//node/task-03/broken-code/snippet-02.js)

**Problem**

1. Callback hell structure
2. No error handling for JSON.parse
3. Repetitive error handling code
4. No file existence checking
5. Blocking operations

**Your Task**

- Fix race condition in file processing
- Convert callback hell to async/await
- Resolve mixed promises/callbacks issues
- `fixCallbackHell()`: Convert callback hell to async/await

#### 2.3: [Mixed Promises and Callbacks](../../solutions//node/task-03/broken-code/snippet-03.js)

**Problem**

1. Mixing promises and callbacks inconsistently
2. Nested async operations without proper chaining
3. Error handling inconsistencies
4. No proper async/await usage

**Your Task**

- Demonstrate all event loop phases
- Show priority of different async operations
- Create interactive examples
- `fixMixedAsync()`: Resolve mixed promises/callbacks

## Expected Output

Your analysis should include exact console output and explanations like:

```
=== Execution Order Analysis ===

Snippet 1 Output:
1. "Start" - Synchronous console.log
2. "End" - Synchronous console.log
3. "Next Tick 1" - process.nextTick (microtask)
4. "Next Tick 2" - process.nextTick (microtask)
5. "Promise 1" - Promise.then (microtask)
6. "Promise 2" - Promise.then (microtask)
7. "Timer 1" - setTimeout (macrotask)
8. "Timer 2" - setTimeout (macrotask)
9. "Immediate 1" - setImmediate (check phase)
10. "Immediate 2" - setImmediate (check phase)

Explanation:
- Synchronous code runs first...
- Microtasks (nextTick, Promises) run before macrotasks...
- etc.
```

## Document Your Work

After completing all previous steps, you must document your work in the file `solutions/task-03.txt`:

- include a brief description of your implementation
- explain how to run your solution
- provide `.js` files with your implementations

## Bonus Points

- Create a visual diagram of event loop phases
- Build a tool to trace async operation execution
- Implement timeout handling for all operations
- Add comprehensive logging for debugging
- Create unit tests for all fixed code
- Demonstrate event loop behavior with different Node.js versions
