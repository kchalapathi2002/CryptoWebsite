const express = require('express');
const { Signupauth } = require('./functions/Signupauth')

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const response = await Signupauth(name, email, password);
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: "Error registering user" });
    console.log(error);
  }
});

module.exports = router;