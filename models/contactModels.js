const mongoose=require("mongoose")
const schema=mongoose.Schema;
const contactSchema=new schema({

nomPrenom :{
type:String,
require:true,

},
adresseMail:{
    type:String,
    require:true,
    
    },

tel:{
    type :String,
    require:true,

},
commentaire:{
    type :String,
    require:true,
}
});
module.exports=contact=mongoose.model("contact",contactSchema);
