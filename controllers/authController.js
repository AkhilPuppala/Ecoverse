import { comaprePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from 'jsonwebtoken';

export const registerController = async(req,res) => {
    try{
        const {name,email,password,phone} = req.body;
        if(!name || !email || !password || !phone)
        {
            return res.send({error: "Enter all the details"});
        }

        const existingUser = await userModel.findOne({email});
        if(existingUser){
            return res.send({
                success: true,
                message:"User already registered"
            })
        }
        const hashedPassword = await hashPassword(password);

        const user = await new userModel({name,email,phone,password:hashedPassword}).save()

        res.send({
            success:true,
            message:"User registered successfully",
            user,
        })

    }catch(error){
        console.log(error);
        res.send({
            success:false,
            message:"Error in registration",
            error
        })
    }
}

export const loginController = async(req,res) => {
    try{
        const {email,password} = req.body;
        if(!email || !password){
            return res.send({
                successs:false,
                message:"Invalid email or password"
            })
        }

        const user = await userModel.findOne({email})
        if(!user){
            return res.send({
                success:false,
                message:"Email is not registered"
            })
        }
        const match = await comaprePassword(password,user.password);
        if(!match){
            return res.send({
                success:false,
                message:"Invalid password"
            })
        }
        const token = await JWT.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:"7d"});
        res.send({
            success:true,
            message:"Logged in successfully",
            user:{
                name: user.name,
                email: user.email,
                phone: user.phone,
            },
            token,
        });


    }catch(error){
        console.log(error);
        res.send({
            success:false,
            message:"Error in login",
            error
        })
    }
}