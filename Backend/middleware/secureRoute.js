    import jwt from "jsonwebtoken"
    import {User} from "../models/user.model.js";

    const secureRoute=async (req,res,next)=>{
        try{
            const token=req.cookies.jwt;
            if(!token){
                return res.status(401).json({error: "No token,authorization denied"});
            }
            const decoded=jwt.verify(token,process.env.SECRET_KEY);
            if(!decoded){
               return res.status(401).json({
                    success:false,
                    message:"Invalid token",
                })
            }
            const user = await User.findById(decoded.userId).select("-password");
            if(!user){
                return res.status(401).json({
                    success:false,
                    message:"no user found",
                })
            }
            req.user=user;
            next();
        }
        catch(error){
            console.log("Error in secureRoute: ",error)
            res.status(500).json({
                success:false,
                message:"Internal server error",
            });
        }
    }
    export default secureRoute;