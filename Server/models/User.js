const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
   
    regno : {
        type : Number,
        required :true
    },
    name : {
        type : String,
        required :true
    }
})

const Users = mongoose.model("Users",userSchema);
module.exports = Users;