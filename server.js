let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);

let port = 3001;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/for-server.html');
});

http.listen(port, () => {
    console.log('listening on http://localhost:%s', port);
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});

/*setInterval(() => {
    var msg = Math.random();
    io.emit('message', msg);
    console.log(msg);
}, 2000);*/