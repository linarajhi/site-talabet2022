
const Para=require("../models/paraModels")
module.exports={
    addPara: async (req, res)=>{
        const{nom,description,adresse,tel,image}=req.body
    
      try{
        const Paras= await new Para({
            nom,
            description,
            adresse,
            tel,
            image,

        });
        await Paras.save();
        res.json(Paras);
    }
        catch(error){
        console.error(error.message)
        res.status(500).send("server error");
         }
},
    getPara:async(req,res)=>{
    try{
        const para=await Para.find()
        res.json(para)
    }
    catch(error){
        console.error(error.message)
    }
    
},
//deletePara
deletePara:async(req,res)=>{
    try{
         const para=await Para.findByIdAndDelete(req.params.id)
        res.json("para deleted")

    }
    catch(error){
        console.error(error.message)

    }
},

//updatPara bech nbadel haja men base de donnee nbadlou f body  new valeur ejdida true:bech ya9balha

updatePara:async(req,res)=>{
    try{
        const para=await Para.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json(para)
        

    }
    catch(error){
        console.error(error.message)
    }

}
}