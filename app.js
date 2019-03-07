const express = require('express');
const app = express();
const morgan = require('morgan');
const model = require('./models/index');
const layout = require('./views/layout');
const routerWiki = require('./routes/wiki');
//const routerUser = require('./routes/user');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));
app.use('/wiki', routerWiki);

app.get('/', (req, res) => {
    res.send(layout('test'))
})

model.db.authenticate().
    then(() => {
        console.log('connected to the database');
    })

const PORT = 3300;
const init = async () => {
    await model.db.sync()
    app.listen(PORT, () => {
        console.log(`App listening in port ${PORT}`);
    });
}

init();
