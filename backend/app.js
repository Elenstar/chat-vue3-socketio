const express = require('express')
const app = express()

const server = require('http').createServer(app)

const { Server } = require('socket.io')

const io = new Server(server, {
    pingTimeout: 1000,
    cors: {
        origin: "http://localhost:8080",
        methods: ["GET", "POST"],
    },
})

app.get("/", (req, res) => {
    res.send("Messenger started")
})

io.on("connection", (socket) => {
    socket.on("chat", (data) => {
        console.log(`Message from ${data.name}: ${data.msg}`)

        let msg = {
            from: {
                name: data.name,
                avatar: data.avatar,
            },
            msg: data.msg,
        }
        socket.broadcast.emit("chat", msg)
    })

    socket.on("disconnect", () => {
        console.log(`user disconnected: ${socket.name}`)
    })
})

server.listen(3000)
