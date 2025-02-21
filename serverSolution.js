const http = require('http');

const server = http.createServer(async (req, res) => {
  // Simulate a long-running task asynchronously
  await new Promise(resolve => setTimeout(resolve, 100)); //Simulate async work

  for (let i = 0; i < 1000000000; i++);

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});