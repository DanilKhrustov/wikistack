const express = require('express');
const app = express();
const port = 3300;

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
