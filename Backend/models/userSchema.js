import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    fullName:{
        type:String,
        
    },
    userName:{
        type:String,
        required:[true, 'Please provide the username']
    },
    email:{
        type:String,
        required:[true, 'Please provide the email'],
        unique:true
    },
    password:{
        type:String,
        required:[true, 'Please provide the password']
    },
    avatar:{type:String},
    
    role:{
        type:String,
        default:'user',
        enum:['user','admin','editor']
    }
},{
    timestamps:true
})


const User = mongoose.model('User', userSchema);
export default User;