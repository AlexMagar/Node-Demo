import express from 'express'

//set the express in the way that we can only fetch the http request


const router = express.Router()

// all() => accept all the CURD functtion 
// router.all("/", (req, res) =>{
//     //this router takes all methods
//     console.log("first")
// })

router.get("/", (req, res) =>{
    res.json({
        status: "success",
        message: "From GET method"
    })
})

router.post("/", (req, res) =>{
    res.json({
        status: "success",
        message: "From POST method"
    })
})

router.patch("/", (req, res) =>{
    res.json({
        status: "success",
        message: "From PATCH method"
    })
})

router.delete("/", (req, res) =>{
    res.json({
        status: "success",
        message: "From DELETE method"
    })
})

export default router;