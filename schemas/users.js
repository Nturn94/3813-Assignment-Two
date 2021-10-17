const mongoose = require('mongoose')


const User = new Schema({

    email: String,
    password : String,
    Rank : String, default: "member"
})

const User = mongoose.model('users', UserSchema)

module.exports = User