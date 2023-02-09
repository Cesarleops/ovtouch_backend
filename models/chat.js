

class Chat {
    constructor(){
        this.messages = [],
        this.activeUsers = []
    }


    getUsers(){
        return this.activeUsers
    }


    connectUsers(users){
        return this.activeUsers = [...this.activeUsers, ...users]
    }

    disconnectUser(uid){
        this.activeUsers = this.activeUsers.filter((user) => user.uid !== uid);
    }

}

module.exports = Chat