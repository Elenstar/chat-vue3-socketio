import io from 'socket.io-client'

export default {
    install: (app, { connection, options }) => {
        const socket = io(connection, options)
        socket.$join = ($payload) => {
            socket.emit("join", $payload)
        }

        socket.$leave = ($payload) => {
            socket.emit("leave", $payload)
        }

        socket.$sendMessage = ($payload) => {
            socket.emit("chat", {
                msg: $payload.msg,
                name: $payload.name,
                avatar: $payload.avatar,
            })
        }
        app.config.globalProperties.$socket = socket
        app.provide('socket', socket)
    }
}
