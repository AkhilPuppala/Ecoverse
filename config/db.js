import mongoose from "mongoose";

const connectDB = async() => {
    try{
        const conn = await mongoose.connect("mongodb+srv://AkhilPuppala:akhil1203@clusterecoverse.xxoya0d.mongodb.net/ecoverse")
    }catch(error){
    }
}

export default connectDB;