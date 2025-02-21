# Node.js Server Freeze: Synchronous Blocking

This repository demonstrates a common Node.js issue: server freezes caused by synchronous, CPU-intensive operations within the request handler.  The `server.js` file contains a simple HTTP server with a loop that consumes significant CPU time, blocking the event loop and preventing the server from responding to subsequent requests.

The solution, provided in `serverSolution.js`, showcases asynchronous programming using promises or async/await to resolve the issue.

## How to Reproduce

1. Clone the repository.
2. Navigate to the repository directory.
3. Run `node server.js`.
4. Attempt to access the server from a browser or using `curl`. You will observe a delay or failure to get a response.

## Solution

The solution utilizes asynchronous techniques to prevent blocking the event loop.