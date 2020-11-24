
const path = require('path');
//require('dotenv').config();

const uploadRoutes= require('./routes/upload')


const express = require('express')

const bodyParser = require('body-parser')
const cors = require('cors')

const PORTS =3000

const app = express()   //instance of express

var mongoose =require('mongoose')

app.use(cors())
const api = require('./routes/api')
app.use('/api', api)
app.use(bodyParser.json()) 




mongoose
.connect(
  'mongodb://localhost:27017/video'

)
.then(() => {
  app.listen(PORTS, console.log(`Server is running on port ${PORTS}`));
})
.catch((err) => console.log(`Could not connect to database server`, err));

app.use(bodyParser.json());
app.use(cors());

app.use('/videos', express.static(path.join('videos')));

app.use('/api/upload', uploadRoutes);