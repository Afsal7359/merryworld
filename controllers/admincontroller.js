module.exports={

GetDashboard: async(req,res)=>{
    try{
        res.render('admin/dashbord',{layout:'adminlayout'});
    }catch(err){
        console.log(err);
    }
},


};