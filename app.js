// express is a http module which simplifies the server process
// its a module from NPM
const express = require('express');
const app = express();
// here we define a home route where each request that is the root; www.localhost:3000 responds to; Hoi
// req and res stand for request and response - request is the incoming request from the browser client
// and res is the response we are going to send back to the browser
app.get('/', (req, res) => {
  res.send('Hoi')
})

app.get('/about', (req, res) => {
  res.send('the about page')
})

app.listen(1337)