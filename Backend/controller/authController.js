import User from "../models/userSchema.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'

export const registerNewUser = async (req, res, next) => {

    try {
        let newUser = req.body
        newUser.password = await bcrypt.hash(newUser.password, 10);

        // bcrypt.genSalt(10, function(err, salt) {
        //     bcrypt.hash(newUser.password, salt, async function(err, hash) {
        //         const user = await User.create(newUser);
        //     });
        // });

        const user = await User.create(newUser);
        res.json({
            user,
            message: "User has been registered",
            success: true
        })
    } catch (error) {
        next(error);
    }
}
export const loginUser = async (req, res, next)=>{
    try {
        let {email, password} = req.body;

        if(!email){
            return next(new Error("Please provide valid email or username"));
        }
        if(!password){
            return next(new Error("Please provide password"));
        }

        const user = await User.findOne({email:email});

        if(!user){
            return next(new Error(`${email} is not found, please create account and try again`))
        }

        const isPasswordMatched = await bcrypt.compare(password, user.password);

        if(!isPasswordMatched){
            return next(new Error('Your password is incorrect, Please try again'));
        }

        // const validUser = await auth.findOne({ email });

        // if (!validUser) {
        //     return next(errorHandler(404, 'User not found'));
        // }

        // const validPassword = await bcrypt.compare(password, validUser.password);

        // if (!validPassword) {
        //     return next(errorHandler(401, 'Wrong credentials!'));
        // }
        //JWT authenticaiton and authorization

        const token=jwt.sign({user:user}, process.env.JWT_SECRET,{expiresIn:'10h'})
        // const{password:pass,...rest}=user._doc;
        res.cookie("token",token,{expire:new Date(Date.now()+900000) ,
            secure:false,
            httpOnly:true,
        }).json(
        {
            user,
            token,
            // rest
        }
        )

        
    } catch (error) {
        next(error)
    }
}
export const logoutUser = (req, res, next) => {
    // Clear the token cookie by setting it to expire in the past
    res.cookie('token', '', {expires: new Date(Date.now())}).json({
        message: 'Logged Out'
    });
}

export const google = async (req, res, next) => {
    const{fullName,email,avatar}=req.body;
    try {
        const googleUser=await auth.findOne({email:req.body.email});
       if(googleUser){
        const token=jwt.sign({id:googleUser._id},process.env.JWT_SECRET_KEY);
        const expirationDate=new Date(Date.now()+7*24*60*60*1000);//1 week
        const{password:_,...rest}=googleUser._doc;
        res.cookie('token',token,{httpOnly:true,expires:expirationDate}).status(200).json({user:rest,token});
       }else{
        const generatedPassword=Math.rondom().toString(360).slice(-8);
        const hashedPassword=await bcrypt.hash(generatedPassword,10);
        const newUser=new auth({fullName:fullName, email:email,password:hashedPassword,avatar:avatar});
        await newUser.save();
        const token=jwt.sign({id:newUser._id},process.env.JWT_SECRET_KEY);
        const expirationDate=new Date(Date.now()+7*24*60*60*1000);//1 week
        const {passwor:_,...rest}=newUser._doc;
        res.cookie('token',token,{httpOnly:true,expires:expirationDate}).status(200).json(rest);
       }
    } catch (error) {
        next(error);
    }
};