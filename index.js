const http = require('http');
const port = 3002;

const server = http.createServer((req, res) => {
    res.end('Hey, Dmytro Baranov ;)');
})

server.listen(port, () => {
    console.log('hi, you can see our app rinning on: http://localhost:%s', port);
})