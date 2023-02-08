
const Chat = require('../models/chat')

const {checkJWT} = require('../helpers/create-jwt')
const chat = new Chat()


const socketController = async(socket, io) => {
 
   console.log('se conecto')

    let user

    socket.on('loged-user', (data) => {
        user = data
        chat.connectUser(data)
        io.emit('active-users', chat.activeUsers )

    })
 
    
     socket.on("message", (message) => {
       
        
        io.emit('recieve-message', message )
    } )
    
    socket.on('start-chat', (uid) => {
     
        socket.join(uid)
    })

    socket.on('disconnect', () => {
        console.log('se desconecto')
        if(user){
            chat.disconnectUser(user.uid)
            io.emit('active-users', chat.activeUsers )
            socket.disconnect()
        }
        

    })
}

module.exports = {
    socketController
}


