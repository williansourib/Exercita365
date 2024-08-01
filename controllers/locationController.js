const Location = require('../models/location');
const User = require('../models/user');

exports.createLocation = async (req, res) => {
  try {
    const { name, description, address, latitude, longitude } = req.body;
    const location = await Location.create({ name, description, address, latitude, longitude, userId: req.userId });
    res.status(201).json(location);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUserLocations = async (req, res) => {
  try {
    const locations = await Location.findAll({ where: { userId: req.userId } });
    res.json(locations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getLocation = async (req, res) => {
  try {
    const location = await Location.findOne({ where: { id: req.params.location_id, userId: req.userId } });
    if (!location) return res.status(404).json({ message: 'Location not found' });
    res.json(location);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateLocation = async (req, res) => {
  try {
    const { name, description, address, latitude, longitude } = req.body;
    const location = await Location.findOne({ where: { id: req.params.location_id, userId: req.userId } });
    if (!location) return res.status(404).json({ message: 'Location not found' });

    location.name = name;
    location.description = description;
    location.address = address;
    location.latitude = latitude;
    location.longitude = longitude;
    await location.save();

    res.json(location);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteLocation = async (req, res) => {
  try {
    const location = await Location.findOne({ where: { id: req.params.location_id, userId: req.userId } });
    if (!location) return res.status(404).json({ message: 'Location not found' });

    await location.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getLocationMapLink = async (req, res) => {
  try {
    const location = await Location.findOne({ where: { id: req.params.location_id, userId: req.userId } });
    if (!location) return res.status(404).json({ message: 'Location not found' });

    const mapLink = `https://www.google.com/maps/search/?api=1&query=${location.latitude},${location.longitude}`;
    res.json({ mapLink });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
