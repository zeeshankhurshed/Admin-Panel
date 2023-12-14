export const errorMiddleware=(err,req,res,next)=>{
    let error={...err};
  
    error.message=err.message
  
    //Handling Mongoose Validation Error
    if(err.name==='ValidationError'){
      const message=Object.values(err.errors).map(value=>value.message);
      error = new Error(message.join(''));
    };
  
    //Handling Mongoose Duplicate key error
    if(err.code===11000){
      const message=`Duplicate ${Object.keys(err.keyValue)} entered`;
      error=new Error(message);
    };
    //wrong mongoose object id error
    if(err.name === 'CastError'){
      const message=`Resource not found. invalid: ${err.path}`;
      error=new Error(message);
    }

  // Fix typo in 'JsonWebTokenError'
  if (err.name === 'JsonWebTokenError') {
      const message = 'JSON Web Token is invalid, Try again';
      error = new Error(message);
  }

  if (err.name === 'TokenExpiredError') {
      const message = "JSON Web Token is Expired, Try again";
      error = new Error(message);
  }

  res.json({
      success: false,
      message: error.message
  });
};
