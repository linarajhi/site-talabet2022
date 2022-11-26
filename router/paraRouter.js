const express=require("express")
const router=express.Router()
const para=require("../controlleurs/paraControlleurs")
router.post("/addPara",para.addPara);
router.get("/getPara",para.getPara);
//delete resto
router.delete("/deletePara/:id",para.deletePara)
//update resto
router.put("/updatePara/:id",para.updatePara)
module.exports=router;