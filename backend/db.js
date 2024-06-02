const mongoose = require('mongoose');
require('dotenv').config();
const mongoURI = process.env.MONGO_API 

const mongoDb = async () =>{
    try{
        await mongoose.connect(mongoURI);
        console.log('connected')
    }catch(error){
        console.log(error);
        console.log('error is occour')
    } 
}

module.exports = mongoDb;