const contact = require("../models/contact");
const feature = require("../models/features");

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

    };