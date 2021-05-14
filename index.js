const express=require('express')
const router = require('./router/router')
const PORT=process.env.PORT || 5000
const app=express()
const dotenv=require('dotenv')
const cors=require('cors')
dotenv.config()
app.use(cors())

app.use(express.json())
app.use(router)

app.listen(PORT,(req,res)=>{
    console.log("connectedd")
})

