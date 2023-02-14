

class Chat {
    constructor(){
        this.messages = [],
        this.activeUsers = []
    }


    getUsers(){
        return this.activeUsers
    }

  

    connectUser(uid){
        return this.activeUsers.push(uid)
    }

    disconnectUser(uid){
        this.activeUsers = this.activeUsers.filter((user) => user.uid !== uid);
    }

}

module.exports = Chat