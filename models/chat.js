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
        this.activeUsers = []
    }

    lastMessages(){
        this.messages = this.messages.slice(0,10)
        return this.messages
    }

    getUsers(){
        return this.activeUsers
    }

    sendMessage(uid,name,message){
        this.messages.unshift(
            new Message(uid,name,message)
        )
    }

    connectUser(user){
        return this.activeUsers.push(user)
    }

    disconnectUser(uid){
        this.activeUsers = this.activeUsers.filter((user) => user.uid !== uid);
    }

}

module.exports = Chat