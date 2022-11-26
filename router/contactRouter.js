const express=require("express")
const router=express.Router()
const contact=require("../controlleurs/contactControlleurs")
router.post("/addContact",contact.addContact);
router.get("/getContact",contact.getContact);
//delete contact
router.delete("/deleteContact/:id",contact.deleteContact)
//update contact
router.put("/updateContact/:id",contact.updateContact)
module.exports=router;