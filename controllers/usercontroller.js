const about = require("../models/about");
const contact = require("../models/contact");
const feature = require("../models/features");
const gallery = require("../models/gallery");
const Banner = require("../models/homebanner");
const rides = require("../models/rides");

module.exports={

    Getfeaturedpage: async(req,res)=>{
        try{

            const features= await feature.find()
            res.render('user/features',{features});
        }catch(err){
            console.log(err);
        }
    },
  
    getdetailedfeaturepage: async(req,res)=>{
        try{
          
     
        const { id } = req.params;
        console.log(id);
        const features= await feature.findById(id)
       
        res.render('user/details',{features});
        }catch(err){
            console.log(err);
        }
    },
    getdetail: async(req,res)=>{
        try{
            res.render('user/details');
        }catch(err){
            console.log(err);
        }
    },
    getcontact: async(req,res)=>{
        try{
            res.render('user/contact')
        }catch(err){
            console.log(err);
        }
    },
    getabout: async(req,res)=>{
        try{
            const abouts = await about.find();
            res.render('user/about',{abouts})
            // console.log(abouts);
        }catch(err){
            console.log(err);
        }
    },
    gethome:async(req,res)=>{
        try{
            const banners= await Banner.find();
            const ride = await rides.find();
            res.render('user/home',{banners,ride});
        }catch(err){
            console.log(err);
        }
    },
    getgallery:async(req,res)=>{
        try{
            const gallerys=await gallery.find();
            res.render('user/gallery',{gallerys});
        }catch(err){
            console.log(err);
        }
    },
    getride:async(req,res)=>{
        try{
            const ride =await rides.find();
            res.render('user/ride',{ride})
        }catch(err){
            console.log(err);
        }
    }
    


    };