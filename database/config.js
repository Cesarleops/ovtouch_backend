
const mongoose = require('mongoose')

const connectDb = async() => {
    try {
        await mongoose.connect(process.env.mongoDb)
        console.log('connected to db')
    } catch (error) {
        console.log(error)
        throw new Error('Failed conecting with the db')
    }
  
}

module.exports = {
    connectDb
}