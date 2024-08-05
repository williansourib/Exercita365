// routes/index.js

const express = require('express');
const userRoutes = require('./userRoutes');
const trainingLocationRoutes = require('./trainingLocationRoutes');

const router = express.Router();

router.use(userRoutes); // Certifique-se de que esta linha está presente
router.use(trainingLocationRoutes);

module.exports = router;
