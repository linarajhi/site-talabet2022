const mongoose=require("mongoose")

const connectDB=async()=>{

try{
    await mongoose.connect("mongodb+srv://lina:azizhanin@cluster0.16qfw.mongodb.net/restoTalabet?retryWrites=true&w=majority" ,{
        
        useNewUrlParser: true,
        useUnifiedTopology: true,
        


    })
    console.log("database.connected...");
}
catch(error){
    console.error("error.message");
}

}
module.exports=connectDB