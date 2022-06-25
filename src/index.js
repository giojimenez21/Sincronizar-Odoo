const express = require('express');
const { names } = require('./config/odoo');

const { router } = require('./routers/index.router');

const app = express();

app.set('views', './src/views');

app.use('/static', express.static(__dirname + '/assets'));

app.set('view engine', 'pug');

app.use('/', router);

app.listen(4000, () => {
    console.log('Server listen on port 4000');
});
