import mongoose from "mongoose";

const connectDB = async() => {
    try{
        const conn = await mongoose.connect("mongodb+srv://AkhilPuppala:akhil1203@clusterecoverse.xxoya0d.mongodb.net/ecoverse")
        console.log(`Connected to mongodb database ${conn.connection.host}`.bgMagenta.white)
    }catch(error){
        console.log(error);
    }
}

export default connectDB;