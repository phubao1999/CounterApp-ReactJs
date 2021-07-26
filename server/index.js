const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const cors = require('cors');
const port = 8000

app.get('/', (req, res) => {
    res.send('Hello World!');
})

io.on('connection', socket => {
    socket.on('message', ({ name, message }) => {
        io.emit('message', (name, message));
    })
});

app.use(cors());


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})