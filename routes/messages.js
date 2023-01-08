const { Router } = require('../routes/messages')
const {newMessage} = require('../controllers/messages')
const router = Router()

router.post('/newmessage', newMessage)