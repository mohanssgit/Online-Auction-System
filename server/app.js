const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); //Load env variables

const app = express();
const PORT = 3000;

//Middleware
app.use(cors());
app.use(bodyParser.json());

//Database
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });


//routes
//
//.routes


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});