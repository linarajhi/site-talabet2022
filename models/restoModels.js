const mongoose=require("mongoose")
const schema=mongoose.Schema;
const restoSchema=new schema({

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
module.exports=resto=mongoose.model("resto",restoSchema);
