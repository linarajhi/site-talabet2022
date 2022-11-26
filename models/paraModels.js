const mongoose=require("mongoose")
const schema=mongoose.Schema;
const paraSchema=new schema({

nom :{
type:String,
require:true,

},
description:{
    type:String,
    require:true,
    
    },
adresse:{
    type:String,
    require:false,
},
tel:{
    type :String,
    require:true,

},
image:{
    type :String,
    require:false,
}
});
module.exports=para=mongoose.model("para",paraSchema);
