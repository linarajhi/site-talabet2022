const express=require("express")
const router=express.Router()
const resto=require("../controlleurs/restoControlleurs")
router.post("/addResto",resto.addResto);
router.get("/getResto",resto.getResto);
//delete resto
router.delete("/deleteResto/:id",resto.deleteResto)
//update resto
router.put("/updateResto/:id",resto.updateResto)
module.exports=router;