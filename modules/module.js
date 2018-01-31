var express = require('express');
var router = express.Router();
var all_records   = require('./api/application/AllRecords');
var fashionImages   = require('./api/application/fashionImages');
var mobileImages = require('./api/application/mobileImages');
var healthImages = require('./api/application/healthImages');
var laptopImages = require('./api/application/laptopImages');

        // All Items Collection
router.post('/addCartItems',all_records.saveData);
router.delete('/deleteCartItems/:id',all_records.deleteData);
router.put('/updateCartItems/:id',all_records.updateCartInfo);
router.get('/getCartItems',all_records.getData);

// Fashion Images
router.post('/insertFashionImages',fashionImages.saveData);
router.get('/getFashionImages',fashionImages.getData);
router.delete('/deleteFashionImages/:id',fashionImages.deleteData);
router.put('/updateFashionImages/:id',fashionImages.updateImageInfo);

// Health Images
router.post('/insertHealthImages',healthImages.saveData);
router.get('/getHealthImages',healthImages.getData);
router.delete('/deleteHealthImages/:id',healthImages.deleteData);
router.put('/updateHealthImages/:id',healthImages.updateImageInfo);

// mobile Images
router.post('/insertMobileImages',mobileImages.saveData);
router.get('/getMobileImages',mobileImages.getData);
router.delete('/deleteMobileImages/:id',mobileImages.deleteData);
router.put('/updateMobileImages/:id',mobileImages.updateImageInfo);

// Laptop Images
router.post('/insertLaptopImages',laptopImages.saveData);
router.get('/getLaptopImages',laptopImages.getData);
router.delete('/deleteLaptopImages/:id',laptopImages.deleteData);
router.put('/updateLaptopImages/:id',laptopImages.updateImageInfo);


module.exports = router;