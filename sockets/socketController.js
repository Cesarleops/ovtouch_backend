
const Chat = require('../models/chat')

const {checkJWT} = require('../helpers/create-jwt')
const chat = new Chat()
const socketController = async(socket) => {
    const user = await checkJWT(socket.handshake.headers['x-token'])
    console.log('usuario',user)
    if(!user){
        return socket.disconnect()
    }
    
    // socket.on('message', (message)=> {
    //     console.log(message)
    //     socket.broadcast.emit('message', message)
    // })
    // chat.connectUser()
    // socket.broadcast.emit('active-users', chat.activeUsers)
    // socket.on('disconnect', () => {
    //     chat.disconnectUser()
    //     socket.broadcast.emit('active-users', chat.activeUsers)

    // })
}

module.exports = {
    socketController
}