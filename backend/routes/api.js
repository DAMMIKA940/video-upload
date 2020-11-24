const express = require('express')
const router = express.Router()

const Upload =require('../models/VideoDetailsSchema')



const mongoose = require('mongoose')

const db = "mongodb://localhost:27017/video"


mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true} );

mongoose.connect(db, err => {
    if (err) {
        console.error('Error!' + err)
    } else {
        console.log('Connected to mongodb')
    }
})


router.get('/videos',function(req,res){
    console.log('all videos'
    )
    Upload.find({})
    .exec(function(err,videos){
        if(err){
            console.log("error")
        }
    })
})


router.get('/uploads' , function(req, res){
    console.log('Get request for all videos')
    Upload.find({})
  .exec(function(err,uploads){
    if (err) {
        console.error('Error!' + err)
    } else {
        res.json(uploads)
    }
  })
  
  })

  router.get('/uploads/:id' , function(req, res){
    console.log('Get request for single videos')
    Upload.findById(req.params.id)
  .exec(function(err,uploads){
    if (err) {
        console.error('Error!' + err)
    } else {
        res.json(uploads)
    }
  })
  
  })

  
module.exports = router
    