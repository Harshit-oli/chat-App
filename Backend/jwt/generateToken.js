import jwt from "jsonwebtoken"

const createTokenSaveCookie=(userId,res)=>{
    const token=jwt.sign({userId},process.env.SECRET_KEY,{expiresIn:'10d'});
    res.cookie("jwt",token,{   //store token in cookies
        httpOnly:true,   //xss attack se bchayega
        secure:true,
        sameSite:"strict"  //csrf attack se bchayega
    });

}
export default createTokenSaveCookie