const http = require('http');

const hostname = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
const port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
