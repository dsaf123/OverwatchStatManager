const http = require('http');

const hostname = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
const port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
const mydb = require('./lib/db.js');
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('Andrew Sucks\n');
  //res.write(mydb.players()[0]);
  console.log(mydb.players());
  res.end('adfs');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
