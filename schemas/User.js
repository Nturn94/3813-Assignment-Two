const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({

    email: String,
    password : String,
    Rank : {type: String, default: "member"}
})

const User = mongoose.model('User', UserSchema)

module.exports = User