// const { MongoClient } = require('mongodb');
// //const MongoClient =require('mongodb').MongoClient;

// const url = 'mongodb://127.0.0.1:27017'

// const database = 'formData'
// const client = new MongoClient(url);

// async function dbConnect() {
//     let result = await client.connect();
//     db = result.db(database);
//     return db.collection('formDataa');

// }

// module.exports = dbConnect;

const mongoose = require("mongoose")
const url = 'mongodb://127.0.0.1:27017'
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