import axios from "axios";

const api = "http://localhost:8000/api/v1/task";

// postTask
export const postTask = async (taskObj) =>{
    try {
        const {data} = await axios.post(api, taskObj)
        return data;
    } catch (error) {
        console.log(error)
    }
}

// fetchTask
// switchTask
// deleteTask