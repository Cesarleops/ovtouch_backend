
const socketController = (socket) => {
    console.log('client connected', socket.id)
    socket.on('message', (message)=> {
        console.log(message)
        socket.broadcast.emit('message', message)
    })
}

module.exports = {
    socketController
}