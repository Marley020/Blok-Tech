// express is a http module which simplifies the server process
// its a module from NPM
const express = require('express');
const {engine} = require('express-handlebars');

const req = require('express/lib/request');
// allows us to extract data from the client being passed in via e.g. form
const bodyParser = require('body-parser');
// slugify strings..
const slug = require('slug');
// upload and or handle images etc.
const multer  = require('multer');
const upload = multer({ dest: 'uploads/'});
const app = express();
// init environmental variables 
require('dotenv').config()
// set port to be 1337
const PORT = 1337;
// initialize handlebars
app.engine('handlebars', engine())
// set the view engine to be handlebars
app.set('view engine', 'handlebars')
// set the view directory equal to views
app.set('views', './views')
// here we define a home route where each request that is the root; www.localhost:3000 responds to; Hoi
// req and res stand for request and response - request is the incoming request from the browser client
// and res is the response we are going to send back to the browser

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('createProfile')
})

app.get('/deleteProfile', (req, res) => {
  res.render('deleteProfile')
})

app.get('/updateProfile', (req, res) => {
  res.render('updateProfile')
})

app.post('/profile', upload.single('avatar'), (req, res) => {
  try {
    console.log('22222', req.body.name)
    if (req.body.rock) {
      console.log('rock was selected')
    } else {
      console.log('not selected')
    }
    res.send('Success')
  } catch (error) {
    console.log('an error ocurred')
    throw new Error(error);
  }
})

app.get('*', (req, res) => {
  res.send('Not Found...')
})

app.listen(PORT, () => {
  console.log('app running on port', PORT)
})