const express = require('express');
const app = express();
const morgan = require('morgan');
const model = require('./models/index');

const PORT = 3300;

const layout = require('./views/layout');



app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    res.send(layout('test'))
})

model.db.authenticate().
    then(() => {
        console.log('connected to the database');
    })

const init = async () => {
    await model.db.sync()
    app.listen(PORT, () => {
        console.log(`App listening in port ${PORT}`);
    });
}

init();
