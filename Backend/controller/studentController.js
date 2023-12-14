import {
  students
} from '../db.js'
import Student from '../models/studentSchema.js'
import * as cloudinary from 'cloudinary'

export const getAllStudents = async (req, res, next) => {
  const students = await Student.find({})
  res.json(students)
}

export const getStudentById = async (req, res, next) => {
  const {id} = req.params;
  try {
    const student = await Student.findById(id)
    if (student) {
      res.json(student)
    } else {
      next(new Error('student not found'))
    }
  } catch (error) {
    next(error)
  }

}
export const createNewStudent = async (req, res, next) => {
  const newStudent = req.body;
  console.log(newStudent);
  // try {
  //   // console.log("Hello");
  //   const r = await Student.create(newStudent);
  //   console.log(r);
  //   res.json({
  //     student: r,
  //     message: 'User has been created successfully'
  //   })
  // } catch (error) {
  //   next(error)
  // }
  try {
    const encoded=newStudent.image;
    const base64ToArray=encoded.split(";base64,");
    const prefix =base64ToArray[0];
    const extension=prefix.replace(/^data:image\//,'');

    if(extension === 'jpeg' || extension === 'jpg' || extension === 'png')
{
    const imageData=base64ToArray[1];
    const fileName=(new Date().getTime()/1000|0) + '.' +extension;
    const imagePath=path.join(__dirname,'./uploads/')+fileName;
    const filePath=path.resolve(imagePath);

    
    if(fs.writeFileSync(filePath,imageData, {encoding:'base64'})){
      newStudent.image=filePath
      await Student.create(newStudent)
    
      }
      return next(new Error('Student has been created'))
      
    }  else{
    return next (new Error("Something went wrong,Please try again"))
}
} catch (e) {
    return next(new Error(e.message))
}
}

export const updateStudent = async (req, res, next) => {
  try {
    const { id } = req.params;
    const update = req.body;
console.log(update);
    const updatedResult = await Student.findOneAndUpdate({ _id: id }, req.body, { new: true });

    if (!updatedResult) {
      return res.status(404).json({
        success: false,
        message: 'Student not found',
      });
    }

    res.json({
      success: true,
      message: 'Data updated successfully',
      updatedResult,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};

export const deleteStudent = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Check if the provided ID is valid
    if (!id) {
      return res.status(400).json({ error: 'Invalid ID provided' });
    }

    // Find and delete the student by ID
    const deletedStudent = await Student.findByIdAndDelete(id);

    // Check if the student with the given ID was found and deleted
    if (!deletedStudent) {
      return res.status(404).json({ error: 'Student not found' });
    }

    // Respond with a success message
    res.json({ message: 'Student deleted successfully' });
  } catch (error) {
    // Handle unexpected errors
    console.error('Error deleting student:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};