import mongoose from "mongoose";

//Schema creates the table
const taskSchema = new mongoose.Schema({
    task:{
        type: String,
        require: true
    },
    hr:{
        type: Number,
        require: true
    },
    type: {
        type: String,
        required: true,
        default: "entry"
    },
})

//create table
// the table name will be non-capital and also will be plural by mongoose 
export default mongoose.model("TaskOne", taskSchema);