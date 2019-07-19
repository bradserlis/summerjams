require('dotenv').config(); //loads the .env file

const express = require('express'),
  app = express(),
  port = 3000,

  request = require('request');



app.get('/', (req, res) => res.send('You are in Bradley world!'))
app.get('/summerjams', (req, res) => res.send('Welcome to SUMMER JAMS!'))
app.get('/:id', (req, res) => 
  request(`https://tastedive.com/api/similar?k=${process.env.MY_KEY}&q=${req.params.id}`, (error, response, body) => {
    let bodyObj = JSON.parse(body);
    res.send(bodyObj)
  })
)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

