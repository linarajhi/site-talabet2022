
const Resto=require("../models/restoModels")
module.exports={
    addResto: async (req, res)=>{
        const{nom,description,adresse,tel,image}=req.body
    
      try{
        const Restos= await new Resto({
            nom,
            description,
            adresse,
            tel,
            image,

        });
        await Restos.save();
        res.json(Restos);
    }
        catch(error){
        console.error(error.message)
        res.status(500).send("server error");
         }
},
    getResto:async(req,res)=>{
    try{
        const resto=await Resto.find()
        res.json(resto)
    }
    catch(error){
        console.error(error.message)
    }
    
},
//deleteResto
deleteResto:async(req,res)=>{
    try{
         const resto=await Resto.findByIdAndDelete(req.params.id)
        res.json("resto deleted")

    }
    catch(error){
        console.error(error.message)

    }
},

//updatResto bech nbadel haja men base de donnee nbadlou f body  new valeur ejdida true:bech ya9balha

updateResto:async(req,res)=>{
    try{
        const resto=await Resto.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json(resto)
        

    }
    catch(error){
        console.error(error.message)
    }

}
}