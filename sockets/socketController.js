
const Chat = require('../models/chat')
const chat = new Chat()

const socketController = async(socket, io) => {
 
    socket.on('loged-users', (users) => {   
        console.log('se disparo loged users')
        chat.connectUsers(users)
      
    })
 
    
     socket.on("send-message", (data) => {
        const sendedTo = chat.activeUsers.filter(u => u.uid === data.recievedBy )
       if(sendedTo){
        socket.to(sendedTo[0].uid).emit('message-recieved', data.message)
       }
        
       
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


