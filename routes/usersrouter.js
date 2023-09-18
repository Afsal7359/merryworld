var express = require('express');
const usercontroller = require('../controllers/usercontroller');
var router = express.Router();

/* GET users listing. */
router.get('/',usercontroller.gethome);

router.get('/about',usercontroller.getabout);

router.get('/contact',usercontroller.getcontact);

router.get('/gallery',usercontroller.getgallery);

router.get('/ride',usercontroller.getride);

router.get('/features',usercontroller.Getfeaturedpage);

router.get('/features/:id',usercontroller.getdetailedfeaturepage);

router.get('/details',usercontroller.getdetail);



module.exports = router;
