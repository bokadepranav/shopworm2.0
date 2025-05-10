// requirements

const mongoose = require('mongoose');
const express = require('express');
const User = require('./user')

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

app.post("/register", async (req, res) => {
  const {username, password} = req.body;
  
  try {
    const existingUser = await User.findOne({ username });
    if(existingUser)
    {
      return res.status(400).json({message: "User already exists"});
    }
    
    const newUser = new User({username, password});
    await newUser.save();

    res.status(201).json({message: "User registered successfully"});
  }
  catch(err) {
    console.log(err);
    res.status(500).json({error: "Server error"});
  }
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
