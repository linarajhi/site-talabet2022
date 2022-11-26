
const Contact=require("../models/contactModels")
module.exports={
    addContact: async (req, res)=>{
        const{nomPrenom,adresseMail,tel,commentaire}=req.body
    
      try{
        const Contacts= await new Contact({
            nomPrenom,
            adresseMail,
            tel,
            commentaire,

        });
        await Contacts.save();
        res.json(Contacts);
    }
        catch(error){
        console.error(error.message)
        res.status(500).send("server error");
         }
},
    getContact:async(req,res)=>{
    try{
        const contact=await Contact.find()
        res.json(contact)
    }
    catch(error){
        console.error(error.message)
    }
    
},
//deleteContact
deleteContact:async(req,res)=>{
    try{
         const contact=await Contact.findByIdAndDelete(req.params.id)
        res.json("contact deleted")

    }
    catch(error){
        console.error(error.message)

    }
},

//updatPara bech nbadel haja men base de donnee nbadlou f body  new valeur ejdida true:bech ya9balha

updateContact:async(req,res)=>{
    try{
        const contact=await Contact.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json(contact)
        

    }
    catch(error){
        console.error(error.message)
    }

}
}