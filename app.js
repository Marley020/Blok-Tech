// express is a http module which simplifies the server process
// its a module from NPM
const express = require('express');
const {engine} = require('express-handlebars');
const app = express();
// initialize handlebars
app.engine('handlebars', engine())
// set the view engine to be handlebars
app.set('view engine', 'handlebars')
// set the view directory equal to views
app.set('views', './views')
// here we define a home route where each request that is the root; www.localhost:3000 responds to; Hoi
// req and res stand for request and response - request is the incoming request from the browser client
// and res is the response we are going to send back to the browser
app.get('/', (req, res) => {
  res.render('home')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/login', (req, res) => {
  res.send('the login page')
})

app.get('*', (req, res) => {
  res.send('Not Found...')
})

app.listen(1337)