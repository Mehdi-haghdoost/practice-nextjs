const mongoose = require("mongoose")


const handler = (req, res) => {
    mongoose
        .connect('mongodb://127.0.0.1:27017/next-db')
        .then(() => console.log('connected to DB succesfully :))'))
        .catch((err) => console.log('do not connect to DB => ', err))


    return res.json({ message: 'welcome to Api Route' })
}

export default handler;