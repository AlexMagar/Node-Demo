import express from "express";

//create an express variable
const app = express();
const PORT = 8000;
// console.log("What comes in express: ",app)

// middlewares
app.use(express.json());

//this is to print in browser, it is a json file (API)
app.use("/", (req, res) =>{
    res.json({message: "server running healthy"})
})

// open port for http request to access the server
app.listen(PORT, (err) =>{
    err 
    ? console.log(err)
    : console.log(`server is running at http://localhost:${PORT}`);
})