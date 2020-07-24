const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;
const route = require('./routes/index');
const cors = require('cors');
const sequelize = require('./models').sequelize;
sequelize.sync();


app.use(cors());

app.use(bodyParser.json());
//app.use('/api', route);

const {
    Teacher,
    Sequelize: { Op }
  } = require('./models');
sequelize.query('SET NAMES utf8;');

app.post('/add/data', (req, res) => {
    console.log(req.body)

      Teacher.create({
          name : req.body.data
      })
      .then( result => {
          res.send(result)
      })
      .catch( err => {
          console.log(err)
          throw err;
      })
}) 
app.get('/get/data', (req, res) => {
    Teacher.findOne({
        where : { id : 10 }
    })
    .then( result => { res.send(result) })
    .catch( err => { throw err })
}) 

app.listen(port,()=>{
    console.log(`express is running on ${port}`);
})
