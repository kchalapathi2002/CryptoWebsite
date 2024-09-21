const User = require('../../mongoose/userModel');

async function Signupauth(name, email, password) {
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return { message: "User already exists" };
        }
        const newUser = new User({ name, email, password });
        await newUser.save();
        return { message: "User registered successfully" };
    }
    catch (error) {
        console.log('ERROR:', error);
    }
}

module.exports = { Signupauth }