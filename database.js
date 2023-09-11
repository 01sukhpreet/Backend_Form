const mongoose = require("mongoose")
const url = 'mongodb://127.0.0.1:27017'  // also defined the database name here by using the /formData at the end

const connectDB = async ()=>{

    let connection = await mongoose.connect(url)
    // console.log(connection)
    
    if(connection){
        console.log("MongoDB connected")
    }else{
        console.log("Error in mongoDB connection")
    }
} 

module.exports = connectDB