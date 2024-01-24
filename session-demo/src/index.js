const express=require('express');
const router=express.Router();
module.exports=router

router.get('/home',(req,res,next)=>{
console.log(JSON.stringify(req.url));
res.send("Happy Learning")
});
