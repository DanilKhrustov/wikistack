const express = require('express');
const app = express();
const morgan = require('morgan');
const PORT = 3300;

const layout = require('./views/layout');



app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    res.send(layout('test'))
})

app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
