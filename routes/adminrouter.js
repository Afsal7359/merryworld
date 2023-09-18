var express = require('express');
const admincontroller = require('../controllers/admincontroller');
const adminpanelcontroller = require('../controllers/adminpanelcontroller');
var router = express.Router();
const upload = require('../util/multer');
const adminauth  = require('../middilewears/Adminauth');

/* GET home page. */
router.get('/',adminauth.adminauth, admincontroller.GetDashboard );
router.post('/login',admincontroller.PostLogin);
router.get('/login',admincontroller.GetLogin);
router.get('/logout',adminauth.adminauth,adminauth.adminauth,admincontroller.AdminLogout)

//home banner
router.get('/banner',adminauth.adminauth,adminpanelcontroller.gethomebanner);
router.post('/addbanner',adminauth.adminauth,upload.single('bannerimage'),adminpanelcontroller.Addhomebanner);
router.post('/addbanner',adminauth.adminauth,upload.single('bannerimage'),adminpanelcontroller.Addhomebanner);
router.get('/deletebanner/:id',adminauth.adminauth,adminpanelcontroller.Deletehomebanner);


//Rides
router.get("/rides",adminpanelcontroller.getrides);
router.post('/addrides',adminauth.adminauth,upload.single('rideimage'),adminpanelcontroller.Addrides);
router.post('/editrides/:id',adminauth.adminauth,upload.single('rideimage'),adminpanelcontroller.editrides);
router.get('/deleterides/:id',adminauth.adminauth,adminpanelcontroller.Deleterides);


//gallery
router.get('/gallery',adminauth.adminauth,adminpanelcontroller.getgallery);
router.post('/addgallerys',adminauth.adminauth,upload.single('gallerysimage'),adminpanelcontroller.addgallery);
router.post('/editgallerys/:id',adminauth.adminauth,upload.single('gallerysimage'),adminpanelcontroller.editgallery);
router.get('/deletegallerys/:id',adminauth.adminauth,adminpanelcontroller.DeleteGallery);


//features
router.get('/feature',adminauth.adminauth,adminpanelcontroller.getfeature);
router.post('/addfeatures',adminauth.adminauth,upload.single('featimage'),adminpanelcontroller.addfeature);
router.post('/editfeatures/:id',adminauth.adminauth,upload.single('featimage'),adminpanelcontroller.updateFeature);
router.get('/deletefeatures/:id',adminauth.adminauth,adminpanelcontroller.deletefeatures);

//contact
router.get('/contact',adminauth.adminauth,adminpanelcontroller.getcontact);
router.post('/contactform',adminauth.adminauth,adminpanelcontroller.postcontact);
router.get('/deletecontacts/:id',adminauth.adminauth,adminpanelcontroller.deletecontact);


//abouts
router.get('/about',adminauth.adminauth,adminpanelcontroller.getabouts);
router.post('/addabout',adminauth.adminauth,upload.single('aboutimage'),adminpanelcontroller.postabouts);
router.post('/editabout/:id',adminauth.adminauth,upload.single('aboutimage'),adminpanelcontroller.updateabouts);
router.get('/deleteabout/:id',adminauth.adminauth,adminpanelcontroller.Deleteabouts);

module.exports = router;
