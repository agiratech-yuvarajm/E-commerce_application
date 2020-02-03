const express   = require('express');
const bodyParser= require('body-parser');
const app       = express();
const rt        = express.Router();

app.use(bodyParser())
app.use(bodyParser.urlencoded({ extended: true }));

const route     = require('./routes/products')(app, rt)

// Port allocation
app.listen(3000,function(){
  console.log("listening to 3000");
});
