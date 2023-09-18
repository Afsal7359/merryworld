var express = require('express');
const admincontroller = require('../controllers/admincontroller');
const adminpanelcontroller = require('../controllers/adminpanelcontroller');
var router = express.Router();
const upload = require('../util/multer')

/* GET home page. */
router.get('/', admincontroller.GetDashboard );


//home banner
router.get('/banner',adminpanelcontroller.gethomebanner);
router.post('/addbanner',upload.single('bannerimage'),adminpanelcontroller.Addhomebanner);
router.post('/addbanner',upload.single('bannerimage'),adminpanelcontroller.Addhomebanner);
router.get('/deletebanner/:id',adminpanelcontroller.Deletehomebanner);


//Rides
router.get("/rides",adminpanelcontroller.getrides);
router.post('/addrides',upload.single('rideimage'),adminpanelcontroller.Addrides);
router.post('/editrides/:id',upload.single('rideimage'),adminpanelcontroller.editrides);
router.get('/deleterides/:id',adminpanelcontroller.Deleterides);


//gallery
router.get('/gallery',adminpanelcontroller.getgallery);
router.post('/addgallerys',upload.single('gallerysimage'),adminpanelcontroller.addgallery);
router.post('/editgallerys/:id',upload.single('gallerysimage'),adminpanelcontroller.editgallery);
router.get('/deletegallerys/:id',adminpanelcontroller.DeleteGallery);


//features
router.get('/feature',adminpanelcontroller.getfeature);
router.post('/addfeatures',upload.single('featimage'),adminpanelcontroller.addfeature);
router.post('/editfeatures/:id',upload.single('featimage'),adminpanelcontroller.updateFeature);
router.get('/deletefeatures/:id',adminpanelcontroller.deletefeatures);

//contact
router.get('/contact',adminpanelcontroller.getcontact);
router.post('/contactform',adminpanelcontroller.postcontact);
router.get('/deletecontacts/:id',adminpanelcontroller.deletecontact);


//abouts
router.get('/about',adminpanelcontroller.getabouts);
router.post('/addabout',upload.single('aboutimage'),adminpanelcontroller.postabouts);
router.post('/editabout/:id',upload.single('aboutimage'),adminpanelcontroller.updateabouts);
router.get('/deleteabout/:id',adminpanelcontroller.Deleteabouts);

module.exports = router;
