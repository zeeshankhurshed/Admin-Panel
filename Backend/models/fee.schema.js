import mongoose from 'mongoose';
const { Schema } = mongoose;

const feeSchema = new Schema({
    reciept:{
        type:String,
        required:[true, 'Please provide the reciept']
    },
    amount:{
        type:String,
        required:[true, 'Please provide the Amount']
    },
    student:{
        type:String,
        required:[true, 'Please provide the student name'],
       
    },
    feemonth:{
        type:String,
        required:[true, 'Please provide the Month']
    },
    date:{
        type:String,
        required:[true, 'Please provide the Year']

    }
    
   
});


const Fee = mongoose.model('Fee', feeSchema);
export default Fee;