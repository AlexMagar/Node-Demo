//model does the queries

import TaskSchema from "./TaskSchema.js"

export const createTask = (taskObj) =>{
    return TaskSchema(taskObj).save();
}