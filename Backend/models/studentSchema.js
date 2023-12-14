import mongoose from 'mongoose';

const { Schema } = mongoose;

const studentSchema = new Schema({
    addclass: {
        type: String,
        required: [true, 'Please provide the addclass'],
    },
    addsection: {
        type: String,
        required: [true, 'Please provide the addsection'],
    },
    addgroup: {
        type: String,
        required: [true, 'Please provide the addgroup'],
    },
    admissiondate: {
        type: String,
        required: [true, 'Please provide the admissiondate'],
    },
    // admissionnumber: {
    //     type: String,
    //     // Add any validation rules if needed
    // },
    // studentname: {
    //     type: String,
    //     // Add any validation rules if needed
    // },
    // fathername: {
    //     type: String,
    //     // Add any validation rules if needed
    // },
    // birthdate: {
    //     type: String,
    //     // Add any validation rules if needed
    // },
    // rollnumber: {
    //     type: String,
    //     // Add any validation rules if needed
    // },
    // studentcategory: {
    //     type: String,
    //     // Add any validation rules if needed
    // },
    // religion: {
    //     type: String,
    //     // Add any validation rules if needed
    // },
    // gender: {
    //     type: String,
    //     // Add any validation rules if needed
    // },
    // bloodgroup: {
    //     type: String,
    //     // Add any validation rules if needed
    // },
    // feedate: {
    //     type: String,
    //     // Add any validation rules if needed
    // },
    // familynumber: {
    //     type: String,
    //     // Add any validation rules if needed
    // },
    // description: {
    //     type: String,
    //     // Add any validation rules if needed
    // },
    // feepackage: {
    //     type: String,
    //     // Add any validation rules if needed
    // },
    // image: [{ secure_url: String, public_id: String }],
});

const Student = mongoose.model('student', studentSchema);

export default Student;

