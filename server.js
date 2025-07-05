const express = require('express');
const app = express()
const db = require('./db');

//add body parser (npm i body-parser)
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// import the router files
const personRouters = require('./routes/personRoutes');
//use the routers
app.use('/person',personRouters);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})