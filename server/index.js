require('dotenv').config();
const massive = require('massive');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const controller = require('./controller');
const axios = require('axios');
const app = express();
app.use(bodyParser.json());
// heroku db: protected-hamlet-69558

massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db', database);
    console.log('she asked me how to run nodemon');
  }).catch(error => {
    console.log('-------------- database issue', error);
  });

app.get('/api/cats', controller.setCatalog);
app.get('/api/cats/:id', controller.setCat);

const PORT = 5432;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} `);
});
