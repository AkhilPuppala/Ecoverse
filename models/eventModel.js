import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    place:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
<<<<<<< HEAD
    },
    time:{
        type:String,
        required:true
    },
    users:[{
        type:mongoose.Schema.Types.Mixed,
        ref:'users'
    },],
    organiser:{
        type:mongoose.ObjectId,
        ref:'users',
        required:true
=======
>>>>>>> 5f67b004c28220ea3806f167687fdeff6cc45c7b
    }
},{timestamps:true});

export default mongoose.model('event',eventSchema)