// controllers/trainingLocationController.js

const { TrainingLocation } = require('../models');

exports.createLocation = async (req, res) => {
  try {
    const { name, description, latitude, longitude } = req.body;
    const userId = req.user.id;
    const location = await TrainingLocation.create({ name, description, latitude, longitude, userId });
    res.status(201).json(location);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getLocations = async (req, res) => {
  try {
    const userId = req.user.id;
    const locations = await TrainingLocation.findAll({ where: { userId } });
    res.json(locations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateLocation = async (req, res) => {
  try {
    const { name, description, latitude, longitude } = req.body;
    const { local_id } = req.params;
    const userId = req.user.id;

    const location = await TrainingLocation.findOne({ where: { id: local_id, userId } });

    if (!location) {
      return res.status(404).json({ error: 'Location not found or unauthorized' });
    }

    await location.update({ name, description, latitude, longitude });
    res.json(location);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteLocation = async (req, res) => {
  try {
    const { local_id } = req.params;
    const userId = req.user.id;

    const location = await TrainingLocation.findOne({ where: { id: local_id, userId } });

    if (!location) {
      return res.status(404).json({ error: 'Location not found or unauthorized' });
    }

    await location.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getLocationMapLink = async (req, res) => {
  try {
    const { local_id } = req.params;
    const userId = req.user.id;

    const location = await TrainingLocation.findOne({ where: { id: local_id, userId } });

    if (!location) {
      return res.status(404).json({ error: 'Location not found or unauthorized' });
    }

    const googleMapsLink = `https://www.google.com/maps?q=${location.latitude},${location.longitude}`;
    res.json({ googleMapsLink });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
