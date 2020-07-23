const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;
const route = require('./routes/index');
const db = require('./config/db');
const cors = require('cors');

app.use(cors());

app.use(bodyParser.json());
app.use('/api', route);
app.get('/api/test', (req, res) => {
    db.query("select * from test", (err, data) => {
        if(!err) {
            res.send(data);
            //res.json(data);
        } else {
            console.log(err);
            res.send(err);
        }
    })
})

app.listen(port,()=>{
    console.log(`express is running on ${port}`);
})
