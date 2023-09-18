const cloudinary = require('../util/cloudinary')
const Banner = require('../models/homebanner');
const rides = require('../models/rides');
const gallery = require('../models/gallery');
const feature = require('../models/features');
const contact = require('../models/contact');
const about = require('../models/about');


module.exports ={
Addhomebanner: async (req, res) => {
        try{
            
           
                const result = await cloudinary.uploader.upload(req.file.path);
                const imageurl = result.url
              
                const { bannerhead } = req.body
        
    
                await Banner.create({bannerhead,bannerimage:imageurl})
                console.log("Home Banner  Added Sucessfully");
                res.redirect('/admin/banner'); 
    
            }catch(err){
              console.log(err);
            }
        },  
 gethomebanner: async (req, res) => {
            try {
                
                const banner = await Banner.find()
               res.render('admin/banner', { layout: "adminlayout",banner})
               
            } catch (err) {
                console.log(err);
            }
        },
    edithomebanner: async (req, res) => {
        try {
            const { id } = req.params;
            const { bannerhead } = req.body;
            console.log(req.body);
            let imageurl = null;
    
            if (req.file) {
                const result = await cloudinary.uploader.upload(req.file.path);
                imageurl = result.url;
            }
    
            const updatedFields = {};
    
            if (bannerhead) {
                updatedFields.bannerhead = bannerhead;
            }
    
            if (imageurl) {
                updatedFields.bannerimage = imageurl;
            }
    
            const updatedBanner = await Banner.findOneAndUpdate(
                { _id: id },
                { $set: updatedFields },
                { new: true }
            );
    
            console.log("Home Banner Successfully updated");
            res.redirect('/admin/banner');
        } catch (err) {
            console.log(err);
        }
    },
    Deletehomebanner: async (req, res) => {
        try {
            const { id } = req.params
            await Banner.findByIdAndDelete({ _id: id });
            console.log("Home Banner Deleted Sucessfully");
            res.redirect('/admin/banner')
        } catch (err) {
            console.log(err);
        }
    },
    getrides: async (req, res) => {
        try {
            
            const ride = await rides.find()
           res.render('admin/amazingrides', { layout: "adminlayout",ride})
           
        } catch (err) {
            console.log(err);
        }
    },
    Addrides: async (req, res) => {
        try{
            
           
                const result = await cloudinary.uploader.upload(req.file.path);
                const imageurl = result.url
              
                const { ridename } = req.body
        
    
                await rides.create({ridename,rideimage:imageurl})
                console.log("ride  Added Sucessfully");
                res.redirect('/admin/rides'); 
    
            }catch(err){
              console.log(err);
            }
        },
    editrides: async (req, res) => {
        try {
            const { id } = req.params;
            const { ridename } = req.body;
            console.log(req.body);
            let imageurl = null;
    
            if (req.file) {
                const result = await cloudinary.uploader.upload(req.file.path);
                imageurl = result.url;
            }
    
            const updatedFields = {};
    
            if (ridename) {
                updatedFields.ridename = ridename;
            }
    
            if (imageurl) {
                updatedFields.rideimage = imageurl;
            }
    
            const updatedBanner = await rides.findOneAndUpdate(
                { _id: id },
                { $set: updatedFields },
                { new: true }
            );
    
            console.log("Ride Successfully updated");
            res.redirect('/admin/rides');
        } catch (err) {
            console.log(err);
        }
    },
    Deleterides: async (req, res) => {
        try {
            const { id } = req.params
            await rides.findByIdAndDelete({ _id: id });
            console.log("Ride Deleted Sucessfully");
            res.redirect('/admin/rides')
        } catch (err) {
            console.log(err);
        }
    },
    getgallery: async(req,res)=>{
        try{
            const gallerys = await gallery.find()
            res.render('admin/gallery', {layout: "adminlayout" , gallerys})
        }catch(err){
            console.log(err);
        }
    },
    addgallery: async(req,res)=>{
        try{
            
            const result= await cloudinary.uploader.upload(req.file.path);
            const imageurl= result.url
            await gallery.create({gallerysimage:imageurl});
            console.log("gallery added Sucessfully");
            res.redirect('/admin/gallery')
        }catch(err){
            console.log(err);
        }
    },
    editgallery: async(req,res)=>{
        try{
            const {id} = req.params;
            let imageurl = null;
            if (req.file) {
                const result = await cloudinary.uploader.upload(req.file.path);
                imageurl = result.url;
            }
            const updatedFields = {};

            if (imageurl) {
                updatedFields.gallerysimage = imageurl;
            }
            const updatedgallery= await gallery.findOneAndUpdate(
                { _id: id },
                { $set: updatedFields },
                { new: true }
            );
            console.log(" gallery updated sucessfully");
            res.redirect("/admin/gallery")
    
    
        }catch(err){
            console.log(err);
        }
    },
    DeleteGallery: async(req,res)=>{
        try{
        const { id } = req.params
        await gallery.findByIdAndDelete({_id:id});
        console.log("gallery deleted sucessfully");
        res.redirect("/admin/gallery")
    }catch(err){
        console.log(err);
    }
    },
    getfeature:async(req,res)=>{
        try{
            const features = await feature.find()
            res.render('admin/features',{layout:"adminlayout" , features});
      
        }
        catch(err){
            console.log(err);
        }
    },
    addfeature:async(req,res)=>{
        try{
            
            const result= await cloudinary.uploader.upload(req.file.path);
            const { feathead,featdescription } = req.body
            const imageurl= result.url

            await feature.create({featimage:imageurl,feathead,featdescription});
            console.log("fetaures added Sucessfully");
            res.redirect('/admin/feature')
        }catch(err){
            console.log(err);
        }
    },
    updateFeature: async(req,res)=>{
            try{
                const { id } = req.params;
                let imageurl = null;
                const { feathead,featdescription } = req.body;
                console.log(req.body);
                if (req.file) {
                    const result = await cloudinary.uploader.upload(req.file.path);
                    imageurl = result.url;
                }
        
                const updatedFields = {};
        
                if (feathead) {
                    updatedFields.feathead = feathead;
                }
                if (featdescription) {
                    updatedFields.featdescription = featdescription;
                }
        
                if (imageurl) {
                    updatedFields.featimage = imageurl;
                }
        
                const updatedfeatures = await feature.findOneAndUpdate(
                    { _id: id },
                    { $set: updatedFields },
                    { new: true }
                );
                console.log("fetaures updated Sucessfully");
                res.redirect('/admin/feature')
            }catch(err){
                console.log(err);
            }
    },
    deletefeatures: async(req,res)=>{
        try{
            const { id } = req.params;
            await feature.findByIdAndDelete({_id:id});
            res.redirect('/admin/feature')

    }catch(err){
        console.log(err);
    }
    },
    getcontact:async(req,res)=>{
        try{
            const contacts= await contact.find()
            res.render('admin/contact',{layout:"adminlayout",contacts})
        }catch(err){
        console.log(err);
        }
    },
    postcontact:async(req,res)=>{
        try{
            const {name,email,phone,subject,message}=req.body
            // console.log(req.body);
            await  contact.create({name,email,phone,subject,message});
            console.log('form submitted sucessfully');
            res.redirect('/contact')
        }catch(err){
            console.log(err);
        }
    },
    deletecontact:async(req,res)=>{
        try{
            const {id} = req.params;
            await contact.findByIdAndDelete(id);
            console.log('deleted sucessfully');
            res.redirect('/admin/contact')
        }catch(err){
            console.log(err);
        }
    },
    getabouts:async(req,res)=>{
        try{
            const abouts=await about.find()
            res.render('admin/about',{layout:"adminlayout",abouts})
        }catch(err){
            console.log(err);
        }
    },
    postabouts:async(req,res)=>{
        try{
            const result= await cloudinary.uploader.upload(req.file.path);
            const imageurl= result.url
            const {abouthead,aboutsubhead,aboutdescription}=req.body
            await about.create({abouthead,aboutsubhead,aboutdescription,aboutimage:imageurl});
            res.redirect('/admin/about')
        }catch(err){
            console.log(err);
        }
    },
    updateabouts:async(req,res)=>{
        try{
            const{id}= req.params
            let imageurl=null
            const {abouthead,aboutsubhead,aboutdescription}=req.body;
            if(req.file){
                const result=await cloudinary.uploader.upload(req.file.path);
                imageurl=result.url
            }
            const updatedFields = {};
            if(abouthead){
                updatedFields.abouthead=abouthead;
            }
            if(aboutsubhead){
                updatedFields.aboutsubhead=aboutsubhead;
            }
            if(aboutdescription){
                updatedFields.aboutdescription=aboutdescription;
            }
            if(imageurl){
                updatedFields.aboutimage=imageurl;
            }
            const updatedabouts = await about.findOneAndUpdate(
                {_id:id},
                {$set:updatedFields},
                {new:true}
            );
            console.log('about updated successfuly');
            res.redirect('/admin/about')
        }catch(err){
            console.log(err);
        }
    },
    Deleteabouts :async (req,res)=>{
    try{
        const{id}=req.params;
        await about.findByIdAndDelete(id);
        console.log('deleted sucessfully');
        res.redirect('/admin/about')
    }catch(err){
        console.log(err);
    }
    },
}