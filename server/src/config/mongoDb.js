//This is the congif file to communnicate app with DB, mongoose

import mongoose from 'mongoose';

// function that does the connection parts
export const mongoConnect = async () =>{
    
    try {
        const con = await mongoose.connect("mongodb://localhost:27017/nottododb");
        // console.log("Hello my firend, ",con)
        con && console.log("mongo is connected")
    } catch (err) {
      console.log(err)
    }
}