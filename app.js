const express = require('express');
const app = express();
const morgan = require('morgan');
const PORT = 3300;

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
