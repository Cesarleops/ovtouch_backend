const express = require('express')
const cors = require('cors')
const {PORT} = process.env
const {socketController} = require('../sockets/socketController')
const {connectDb} = require('../database/config')


class Server {
    constructor(){
        this.app = express()
        this.port = PORT
        this.userPath = '/api/users'
        this.authPath = '/api/auth'
        this.server = require('http').createServer(this.app)
        this.io = require('socket.io')(this.server, {
            cors: {
                origin: '*'
            }
        })

        this.dbConnection()


        this.middlewares()

        this.routes()

        this.sockets()

    }

    async dbConnection(){
        await connectDb()
    }


    middlewares(){
      this.app.use(cors())
      
      this.app.use(express.json())
    
    }
    
    

    routes(){
        this.app.use(this.userPath, require('../routes/users'))
        this.app.use(this.userPath, require('../routes/conversations'))
        this.app.use(this.userPath, require('../routes/messages'))
        this.app.use(this.authPath, require('../routes/auth'))
    }

    sockets(){
        this.io.on('connection', (socket) =>  socketController(socket, this.io))
        }

    listen(){
        this.server.listen(this.port, ()=> {
            console.log(`Listening at port ${this.port}`)
        })
    }


}


module.exports = Server
