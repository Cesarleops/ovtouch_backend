
const signWithGoogle = async(req,res) => {
    const {id_token} = req.body

    res.json({
        msg:'todo ok',
        id_token
    })
}

module.exports = {
    signWithGoogle
}