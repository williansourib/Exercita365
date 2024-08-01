const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/location', authMiddleware, locationController.createLocation);
router.get('/locations', authMiddleware, locationController.getUserLocations);
router.get('/location/:location_id', authMiddleware, locationController.getLocation);
router.put('/location/:location_id', authMiddleware, locationController.updateLocation);
router.delete('/location/:location_id', authMiddleware, locationController.deleteLocation);
router.get('/location/:location_id/maps', authMiddleware, locationController.getLocationMapLink);

module.exports = router;
