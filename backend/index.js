const express = require('express');
const cors = require('cors');
const connectDB = require('./mongoose/dbconnect');
const signupRoute = require('./Apis/Signup');
const signinRoute = require('./Apis/Signin');
const cryptoRoute = require('./Apis/Cryptodata');
const latesttblockRoute = require('./Apis/Latestblock');

const app = express();
connectDB();
app.use(cors());
app.use(express.json());

app.use('/api/signup', signupRoute);
app.use('/api/signin', signinRoute);
app.use('/', cryptoRoute);
app.use('/finalized', latesttblockRoute);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});