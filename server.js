
const express=require("express");
const app=express();
require('dotenv').config({path:"./config/.env"});
const connectDb=require("./config/connectDb");

connectDb();
const User=require("./models/user")
app.use(express.json())
const PORT=process.env.PORT ||6000;





app.post("/post",async(req,res)=>{
    const {FullName,email,phone}=req.body
try {
    const newUser=new User ({
        FullName,email,phone
    })
    await newUser.save()
    res.send(newUser)
} catch (error) {
    res.send(error.message)
    
}
})

app.get("/get",async(req,res)=>{
    try {
        const users=await User.find()
        res.send(users)
    } catch (error) {
        res.send(error.message)
    }
})
app.get("/get/:id",async(req,res)=>{
    try {
        const theUser=await User.findById(req.params.id)
        res.send(theUser)
    } catch (error) {
        res.send(error)
        
    }
})

app.delete("/delete/:id",async(req,res)=>{
    try {
        const deleteUser=await User.findByIdAndDelete(req.params.id)
        res.send("the user is deleted")
    } catch (error) {
        
    }
})

app.post("/edit/:id",async(req,res)=>{
    try {
        const editUser=await User.findByIdAndUpdate(req.params.id,{...req.body},{new:true} )
        res.send(editUser)
    } catch (error) {
     res.send(error.message)   
    }
})

 


app.listen(PORT,err=>err?console.log(err):console.log(`server is runing on PORT ${PORT}`))



