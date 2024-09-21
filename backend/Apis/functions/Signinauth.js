const User = require('../../mongoose/userModel');

async function Signinauth(email, password) {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return { message: "User not found" };
    }

    if (user.password !== password) {
      return { message: "Invalid credentials" };
    }

    return { message: "Signed in successfully", name: user.name };
  }
  catch (error) {
    console.log('ERROR:', error);
  }
}

module.exports = { Signinauth };