const express=require("express")
const get_details = require("../puppetter/details")
const download_movie = require("../puppetter/download")
const latest = require("../puppetter/filmyzilla")

const page = require("../puppetter/page")
const search_movie = require("../puppetter/search")
const router=express.Router()
var url=process.env.MOVIEURL

router.get("/latest/:page",async(req,res)=>{
   
     // try {
          var result=await page(req.params.page,url)
          
         return res.json({result})
     // } catch (error) {
          
     //    return  res.status(500).json({error:"Something went wrong"})
     // }


})

router.get("/category/:category/page/:page",async(req,res)=>{
     try {
          var result=await latest(url,req.params.category,req.params.page)
         return res.json({result})
     } catch (error) {
        return  res.status(500).json({error:"Something went wrong"})
     }

})

router.get("/search/q=:name",async(req,res)=>{

     try {
          var result=await search_movie(req.params.name,url,req.params.page)
         return res.json({result})
     } catch (error) {
         return res.status(500).json({error:"Something went wrong"})
     }
})

router.post("/movie-description",async(req,res)=>{
     try {
          var result=await get_details(req.body.link,url)
         return res.json({result})
     } catch (error) {
        return  res.status(500).json({error:"Something went wrong"})
     }
})

router.post("/download",async(req,res)=>{
     try {
  
          var result=await download_movie(req.body.fname,req.body.fsip,url)
        return  res.json({result})
     } catch (error) {
        return  res.status(500).json({error:"Something went wrong"})
     }
})

module.exports=router