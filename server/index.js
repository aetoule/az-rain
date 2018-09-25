require('dotenv').config();
const massive = require('massive');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const controller = require('./controller');
const axios = require('axios');
var nodemailer = require('nodemailer');
const creds = require('./config.js');

// var Instafeed = require("instafeed.js");
const app = express();
app.use(bodyParser.json());
// heroku db: protected-hamlet-69558

// google maps api key: AIzaSyCeKynEDmv_Kwdn3fQJZ1K2ORAyfSgaRxE

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
  // cookie: {
  //   maxAge: 1000 * 60 * 60 * 24 * 365
  // }
}));

massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db', database);
    console.log('she asked me how to run nodemon');
  }).catch(error => {
    console.log('-------------- database issue', error);
  });

  app.get(`/callback`, (req, res) => {
    console.log('/callback fired');
    
    const payload = {
      client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
      client_secret: process.env.AUTH0_CLIENT_SECRET,
      code: req.query.code,
      grant_type: 'authorization_code',
      redirect_uri: `http://${req.headers.host}/callback`
    };
  
    function tradeCodeForAccessToken() {
      return axios.post(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/oauth/token`, payload);
    }
  
    function tradeAccessTokenForUserInfo(accessTokenResponse) {
      const accessToken = accessTokenResponse.data.access_token;
      return axios.get(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/userinfo?access_token=${accessToken}`);
    }
  
    function storeUserInfoInDatabase(response) {
      const auth0id = response.data.sub;
      const db = req.app.get('db');
      return db.get_admin_info(auth0id).then(admins => {
        const adminArray = {
          name: response.data.name,
          email: response.data.email,
          picture: response.data.picture
        };
        if (admins.length) {
          console.log('admin found');
          const admin = admins[0];
          console.log(adminArray);
          req.session.admin = adminArray;
          res.redirect('/adopt/catalog');
        } else {
          return db.create_admin(auth0id).then(newAdmin => {
            console.log('created admin');
            req.session.admin = adminArray;
            res.redirect('/adopt/catalog');
          }).catch(error => {
            console.log('error in db.create_admin', error);
            res.status(500).send('Unexpected error');
          });
        }
      }).catch(error => {
        console.log('error in db.get_admin_info', error);
        res.status(500).send('Unexpected error');
      });
    }
  
    tradeCodeForAccessToken()
    .then(tradeAccessTokenForUserInfo)
    .then(storeUserInfoInDatabase)
    .catch(error => {
      console.log('error in /callback', error);
      res.status(500).send('Unexpected error');
    });
  });
  
  
  // Nodemailer
  var transport = {
    host: 'smtp.gmail.com',
    auth: {
      user: creds.USER,
      pass: creds.PASS
    }
  }
  
  var transporter = nodemailer.createTransport(transport)
  
  transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Server is ready to take messages');
    }
  });
// End of Nodemailer

app.post('/api/cats/register-admin', controller.postAdmin);
app.post('/api/cats/logging-in-admin', controller.postLogin);

// CRUD
app.get('/api/cats', controller.setCatalog);
app.get('/api/cats/:id', controller.setCat);
app.post('/api/cats/', controller.addCat);
app.put('/api/cats/:id', controller.updateCat);
app.delete('/api/cats/:id', controller.deleteCat);

app.get('/api/admin-data', (req, res) => {
  res.json(req.session.admin );
});
app.post('/api/logout', (req, res) => {
  req.session.destroy();
  res.send('session destroyed');
})

// Nodemailer
app.post('/send', (req, res, next) => {
  console.log(req.body);
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var content = `name: ${name} \n email: ${email} \n message: ${message} `
  console.log('name', name);
  console.log('email', email);
  console.log('message', message);
  var mail = {
    from: name,
    to: creds.USER,  //Change to email address that you want to receive messages on
    subject: 'New Message from Contact Form',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.log('transporter.sendMail error',err)
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
})

const PORT = 5432;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} `);
});
