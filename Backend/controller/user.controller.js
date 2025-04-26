import {User} from "../models/user.model.js";
import bcrypt from "bcryptjs"
import createTokenSaveCookie from "../jwt/generateToken.js";

export const SignUp=async (req,res)=>{
   try {
    const {fullname,email,password,confirmPassword}=req.body; 

    if(password != confirmPassword){
        return res.status(400).json({
            success:false,
            message:"password does not match",
        });
    }
    const user=await User.findOne({email});
    if(user){
        return res.status(400).json({
            success:false,
            message:"user already exist"
        })
    }
    const hashedPassword=await bcrypt.hash(password,10);
    const newUser=new User({
        fullname,
        email,
        password:hashedPassword,
        confirmPassword:hashedPassword,
    })
    await newUser.save();
    if(newUser){
        createTokenSaveCookie(newUser._id,res);
        return res.status(200).json({ 
            required:true,
            message:"user created successfully",
            user:{
                _id:newUser._id,
                fullname:newUser.fullname,
                email:newUser.email,
            },
        });
    }
   } catch (error) {
    console.log(error);
    
   }
}
export const login=async (req,res)=>{
    try {
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({
                message:"something is missing",
                success:false,
            })
        }
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json({
                success:false,
                message:"user not found please signup first",
            })
        }
        const isMatch= await bcrypt.compare(password,user.password);

        if(!isMatch){
            return res.status(400).json({
                success:false,
                message:"password does not match",
            });  
        }
        createTokenSaveCookie(user._id,res);
        
        res.status(200).json({
            success:true,
            message:"user logged in successfully",
            user:{
                fullname:user.fullname,
                email,
                _id:user._id,
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:"Internal server error",
        })
    }
}
export const logout=async(req,res)=>{
    try {
        res.clearCookie("jwt");
        return res.status(200).json({
            success:true,
            message:"user logged out successfully",
        })
    } catch (error) {
        return res.status(404).json({
            success:false,
            message:"something is wrong",
        });
        
    }
}

export const allUsers= async(req,res)=>{
    try {
        const loggedInUser=req.user._id;
        const allUsers= await User.find({_id:{$ne: loggedInUser}}).select("-password");
        res.status(200).json(allUsers);
    } catch (error) {
        console.log("Error in allUsers controller: "+ error);
        
    }
     
}