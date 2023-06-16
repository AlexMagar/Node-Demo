import express from "express";
import router from "./src/router/taskRouter.js";
import { mongoConnect } from "./src/config/mongoDb.js";

//create an express variable
const app = express();
const PORT = 8000;
// console.log("What comes in express: ",app)

//morgan is to keep the log of the activities, login purpose

//connect mongodb
mongoConnect();

// middlewares
app.use(express.json());

//this is to print in browser, it is a json file (API)
app.use("/api/v1/task", router)

app.use("/", (req, res) =>{
    res.json({message: "server runnung healthy"})
})

// open port for http request to access the server
app.listen(PORT, (err) =>{
    err 
    ? console.log(err)
    : console.log(`server is running at http://localhost:${PORT}`);
})