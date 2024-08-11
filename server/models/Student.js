import { Schema,model } from "mongoose";

const StudentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    grade: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
},{
    timestamps: true,   
});

const Student = model("Student", StudentSchema);

export default Student;