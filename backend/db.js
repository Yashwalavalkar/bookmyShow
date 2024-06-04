const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://gofoodpro:gofoodpro0077@cluster0.squ7qcj.mongodb.net/bookmyShow?retryWrites=true&w=majority&appName=Cluster0"

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