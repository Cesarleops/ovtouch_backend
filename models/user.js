const {Schema, model} = require('mongoose')

const userSchema = Schema({
    name: {
        type: String,
        required: [true, 'el nombre es obligatorio']
    },
    email: {
        type:String,
        unique: true,
        required: [true, 'el correo es obligatorio']
    },
    password: {
        type: String,
        required: [true, 'la contraseña es obligatoria']
    },
    img: {
        type: String,
       
    },
    status: {
        type: Boolean,
        default:true
    },
    google: {
        type: Boolean,
        default: false
    }
})

module.exports = model('User', userSchema)