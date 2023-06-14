import express from 'express'

//set the express in the way that we can only fetch the http request
let fakeDb = [
    {
        "_id": "001",
        "task": "playing ball",
        "hours": 13,
        "type": "entry"
    },

    {
        "_id": "002",
        "task": "playing ball",
        "hours": 13,
        "type": "entry"
    },
    {
        "_id": "003",
        "task": "programming",
        "hours": 13,
        "type": "entry"
    }, 
    {
        "_id": "004",
        "task": "programming",
        "hours": 13,
        "type": "entry"
    }
];

const router = express.Router()

// all() => accept all the CURD functtion 
// router.all("/", (req, res) =>{
//     //this router takes all methods
//     console.log("first")
// })

router.get("/", (req, res) =>{
    res.json({
        status: "success",
        message: "From GET method",
        fakeDb
    })
})

router.post("/", (req, res) =>{
    fakeDb.push(req.body);
    res.json({
        status: "success",
        message: "Data been added sucessfully"
    })
})

router.patch("/", (req, res) =>{
    const {_id, type} = req.body; //destructure
    
    //override the fakeDb
    fakeDb = fakeDb.map((item) =>{
        if(item._id === _id){
            // mutating the orginal data which is not good
            // it will modify the orginal data, which is not a good practise
            // item.type = type; 

            // return data stoping from mutating
            //return by creating new obj
            return {
                //item => copy of all the orginal array
                ...item, 
                type
            }
        }
        return item;
    })

    res.json({
        status: "success",
        message: "The task has been switched"
        
    })
})

router.delete("/", (req, res) =>{
    const {_id} = req.body;
    fakeDb = fakeDb.filter((item) => item._id !== _id);
    res.json({
        status: "success",
        message: "From DELETE method sucess"
    })
})

export default router;