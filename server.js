
const express=require("express");
const app=express();
const cors= require("cors")
const connectDB=require("./config/db");
connectDB()
app.use(express.json());
app.use(cors())
const restoRouter=require("./router/restoRouter")
const paraRouter=require("./router/paraRouter")
const contactRouter=require("./router/contactRouter")
app.use("/resto",restoRouter);
app.use("/para",paraRouter);
app.use("/contact",contactRouter);

const PORT=process.env.PORT||"7000"

app.listen(PORT,(err)=>{
    if (err){

        console.log("server is not running");
    }
    else {
        console.log(`serveur is running on port ${PORT}`);
    }

});