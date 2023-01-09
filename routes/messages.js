const { Router } = require('../routes/messages')
const {newMessage, getMessages} = require('../controllers/messages')
const router = Router()

router.post('/newmessage', newMessage)


router.get('/:chatId', getMessages)