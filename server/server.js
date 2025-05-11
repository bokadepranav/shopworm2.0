// requirements

const mongoose = require('mongoose');
const express = require('express');
const authRoutes = require('./routes/authRoutes');
// mongoDb connection

const mongoURI = 'mongodb+srv://pranavbokade279:Pranav%24279@cluster0.tnukm2q.mongodb.net/shopworm?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ MongoDB connection error:', err));




// -- server api

const app = express();
app.use(express.json()); // middleware to parse res.body data

app.use('/auth', authRoutes);

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
