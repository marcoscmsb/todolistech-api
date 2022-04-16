import mongoose from "mongoose";

export async function connect(){
    await mongoose.connect("mongodb+srv://admin:12345@cluster0.wmul2.mongodb.net/todolistech?retryWrites=true&w=majority")
     console.log("DB Conected")
 }
 