var express = require('express');
const usercontroller = require('../controllers/usercontroller');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('user/home');
});
router.get('/about',function(req,res, next){
  res.render('user/about')
});
router.get('/contact',function(req,res, next){
  res.render('user/contact')
});
router.get('/gallery',function(req,res, next){
  res.render('user/gallery')
})
router.get('/ride',function(req,res, next){
  res.render('user/ride')
})
router.get('/features',usercontroller.Getfeaturedpage);
router.get('/features/:id',usercontroller.getdetailedfeaturepage);
router.get('/details',usercontroller.getdetail);



module.exports = router;
