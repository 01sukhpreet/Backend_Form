const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        firstName :{
            type : String,
            required : true
        },
        lastName :{
            type : String,
            required : true
        },
        email :{
            type : String,
            required : true
        },
        phone :{
            type : Number,
            required : true,
            max: 9999999999,
            min:1000000000
        }
    }
)
module.exports = mongoose.model("user", userSchema)