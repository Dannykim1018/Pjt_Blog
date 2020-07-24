const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;
const route = require('./routes/index');
const sequelize = require('./models').sequelize;
const cors = require('cors');


sequelize.sync();
app.use(cors());

app.use(bodyParser.json());
//app.use('/', route);

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
    Teacher.findAll({
 //       where : { id : 10 }
    })
    .then( result => { res.send(result) })
    .catch( err => { throw err })
}) 

app.post('/modify/data', (req, res) => {
    Teacher.update({ name : req.body.modify.name }, {
        where : { id : req.body.modify.id }
    })
    .then( result => { res.send(result) })
    .catch( err => { throw err })
})

app.post('/delete/data', (req, res) => {
    Teacher.destroy({
        where : { id : req.body.delete.id }
    })
    .then( res.sendStatus(200) )
    .catch( err => { throw err })
})

app.listen(port,()=>{
    console.log(`express is running on ${port}`);
})
