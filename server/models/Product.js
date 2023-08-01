const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    product:String,
    email:String,
    price: Number
})

const UserModel = mongoose.model("product",UserSchema)
module.exports = UserModel