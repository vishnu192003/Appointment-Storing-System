import Student from "../models/Student.js";
import User from "../models/User.js";

const postStudent = async(req, res)=>{
    const {name, age, grade, address, phone, email, branch, photo, user} = req.body;

    const student = new Student({
        name,
        age,
        grade,
        address,
        phone,
        email,
        branch,
        photo, 
        user
    });

    try{
        const savedStudent = await student.save();

        res.json({
            success:true,
            message: "Student added successfully",
            student: savedStudent
        })
    }
    catch(e){
        res.json({
            success: false,
            message: e.message,
            data: null
        })
    }
}

const getStudents = async(req, res)=>{
    const {userId} = req.query;

    const user = await User.findById(userId)

    if(!user){
        return res.json({
            success: false,
            message: "User not found",
            data: null
        })
    }

    const students = await Student.find({user:userId}).sort({createdAt:-1});

    res.json({
        success: true,
        message: "Students fetched successfully",
        data: students
    })
}

const deleteStudent = async(req, res)=>{
    const {id} = req.params;

    await Student.deleteOne({_id:id});

    res.json({
        success: true,
        message: "Student deleted successfully",
        data: null
    })
}


export {
    postStudent,
    getStudents,
    deleteStudent
}