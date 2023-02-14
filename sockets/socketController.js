
const Chat = require('../models/chat')
const chat = new Chat()

const socketController = async(socket, io) => {
    let user
    socket.on('loged-users', (uid) => {   
        
        chat.connectUser({ 
            userId: uid,
            socketId: socket.id})
        console.log(chat.activeUsers)
    })

     socket.on("send-message", (data) => {
        console.log(data.recievedBy)
        console.log('llego un mensaje')
        const sendedTo = chat.activeUsers.filter(u => u.userId === data.recievedBy)
        console.log(sendedTo)
        if(sendedTo.length > 0) socket.to(sendedTo[0].socketId).emit('privado', data.message) 
          
      // socket.broadcast.emit('privado', data.message) 
    } )
    

    socket.on('disconnect', () => {
        
        // if(user){
        //     chat.disconnectUser(user.uid)
        //     io.emit('active-users', chat.activeUsers )
        //     socket.disconnect()
        // }
        

    })
}

module.exports = {
    socketController
}


