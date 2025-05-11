const User = require('../models/user');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (!existingUser) {
      console.log('--user not found')
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, existingUser.password);
    console.log("ismatch" , isMatch)
    if (isMatch) {
      return res.status(200).json({ message: "Login successful" });
    } else {
      return res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
