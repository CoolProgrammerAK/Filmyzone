const express=require("express")
const get_details = require("../puppetter/details")
const download_movie = require("../puppetter/download")
const latest = require("../puppetter/filmyzilla")

const page = require("../puppetter/page")
const search_movie = require("../puppetter/search")
const router=express.Router()


router.get("/latest/:page",async(req,res)=>{
   
     try {
          var result=await page(req.params.page)
          res.json({result})
     } catch (error) {
          
          res.status(500).json({error:"Something went wrong"})
     }


})

router.get("/category/:category/page/:page",async(req,res)=>{
     try {
          var result=await latest(req.params.category,req.params.page)
          res.json({result})
     } catch (error) {
          res.status(500).json({error:"Something went wrong"})
     }

})

router.get("/search/q=:name",async(req,res)=>{

     try {
          var result=await search_movie(req.params.name,req.params.page)
          res.json({result})
     } catch (error) {
          res.status(500).json({error:"Something went wrong"})
     }
})

router.post("/movie-description",async(req,res)=>{
     try {
          var result=await get_details(req.body.link)
          res.json({result})
     } catch (error) {
          res.status(500).json({error:"Something went wrong"})
     }
})

router.post("/download",async(req,res)=>{
     try {
  
          var result=await download_movie(req.body.fname,req.body.fsip)
          res.json({result})
     } catch (error) {
          res.status(500).json({error:"Something went wrong"})
     }
})

module.exports=router