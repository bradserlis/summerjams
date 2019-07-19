const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('You are in Bradley world!'))
app.get('/summerjams', (req, res) => res.send('Welcome to SUMMER JAMS!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
