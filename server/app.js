const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/wanderwise', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Schema for Trip Data
const tripSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  phone: String,
  start: Date,
  end: Date,
  destination: String,
  travelmode: [String],
  budget: Number,
  otherDestination: String,
});

const Trip = mongoose.model('Trip', tripSchema);

// API Endpoint to Save Form Data
app.post('/get-form-data', async (req, res) => {
  const tripData = new Trip(req.body);
  try {
    await tripData.save();
    res.status(200).json({ message: 'Booking saved successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save booking.' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));