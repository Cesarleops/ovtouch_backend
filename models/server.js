const express = require('express')
const cors = require('cors')
const {PORT} = process.env

const {connectDb} = require('../database/config')


class Server {
    constructor(){
        this.app = express()
        this.port = PORT
        this.userPath = '/api/users'

        this.dbConnection()

        this.middlewares()

        this.routes()

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
    }

    listen(){
        this.app.listen(this.port, ()=> {
            console.log(`Listening at port ${this.port}`)
        })
    }


}


module.exports = Server
