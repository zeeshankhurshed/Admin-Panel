import 'dotenv/config'
import jwt from 'jsonwebtoken'


export const isAuthenticatedUser=async (req,res,next)=>{
  try {
    const {token}=req.cookies;
    if(!token){
        return next (new Error('Please login to access the resource'))
    }
       const {payload} = jwt.verify(token, process.env.JWT_SECRET);
        req.user=payload;
  } catch (err) {
    next(err)
  }


  next();
}

export const authorizedUser= (...roles)=>{
  return(req,res,next)=>{
    if(!roles.includes(req.user.role)){
      return next(new Error(`Role ${req.user.role} is not allowed to aceess this resource` ))
    }
    next()
  }
  }