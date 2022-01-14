const server = require('http').createServer()
const io = require('socket.io')(server, {
    cors: {
        origin: "http://localhost:8080",
        methods: ["GET", "POST"]
    }
});
io.on('connection', (socket)=> {
    socket.emit("hello", "youtube tutorial");
    socket.on("play", index => {
        console.log("server received", index)
        socket.broadcast.emit("play", index)
    })
})

server.listen(3000)
const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

const app = express()

//serve files from our dist directory which now contains out index.html
app.use('/',serveStatic(path.join(__dirname,'/dict')) )

const port = process.env.PORT || 8080
app.listen(port)

console.log('Listening on port: ' + port)