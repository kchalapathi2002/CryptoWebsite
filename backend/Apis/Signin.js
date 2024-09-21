const express = require('express');
const { Signinauth } = require('./functions/Signinauth');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    const response = await Signinauth(email, password);
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: "Error signing in" });
  }
});

module.exports = router;
