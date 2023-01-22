class Message {
    constructor(uid,name,message){
        this.uid = uid
        this.name = name
        this.message = message
    }
}


class Chat {
    constructor(){
        this.messages = [],
        this.activeUsers = {}
    }

    lastMessages(){
        this.messages = this.messages.slice(0,10)
        return this.messages
    }

    getUsers(){
        return Object.values(this.activeUsers)
    }

    sendMessage(uid,name,message){
        this.messages.unshift(
            new Message(uid,name,message)
        )
    }

    connectUser(user){
        this.activeUsers[user.id]= user
    }

    disconnectUser(id){
        delete this.activeUsers[id]
    }

}

module.exports = Chat