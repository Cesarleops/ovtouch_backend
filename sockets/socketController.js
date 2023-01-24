
const Chat = require('../models/chat')

const {checkJWT} = require('../helpers/create-jwt')
const chat = new Chat()


const socketController = async(socket, io) => {
    console.log('esta conecto', socket.id)
    socket.on('loged-user', (data) => {
        console.log('usuario',data)
        chat.connectUser(data)
        io.emit('active-users', chat.activeUsers )

    })
    socket.on('disconnect', ({uid}) => {
        console.log('usuario se desconecto', uid)
        chat.disconnectUser(uid)
        io.emit('active-users', chat.activeUsers )
        socket.disconnect()

    })
    //const user = await checkJWT(socket.handshake.headers['x-token'])
     socket.on("message", (message) => {
        console.log(message)
        io.emit('recieve-message', message )
    } )
    
}

module.exports = {
    socketController
}


