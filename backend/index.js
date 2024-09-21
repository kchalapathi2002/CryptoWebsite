const express = require('express');
const cors = require('cors');
const connectDB = require('./mongoose/dbconnect');
const signupRoute = require('./Apis/Signup');
const signinRoute = require('./Apis/Signin');
const cryptoRouter = require('./Apis/Cryptodata');

const app = express();
connectDB();
app.use(cors());
app.use(express.json());

app.use('/api/signup', signupRoute);
app.use('/api/signin', signinRoute);
app.use('/', cryptoRouter);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});