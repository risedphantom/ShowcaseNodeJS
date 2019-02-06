const domain = require('express-domain-middleware');
const express = require('express');
const compress = require('compression');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

require('express-async-errors');

const log = require('../logger');
const Middleware = require('./middlewares');
const Controllers = require('./controllers');


/*
 * Globals
 */
const app = express();

/*
 * Build pipeline
 */
app.enable('trust proxy');
app.set('views', 'site/view');
app.set('view engine', 'hbs');
app.set('view options', {layout: 'shared/layout'});
app.use(cookieParser());
app.use(domain);
app.use(compress({}));
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(log.middleware);
app.use(Middleware.closing);
app.use(Middleware.locale);
app.use(Middleware.statics);
app.use('/admin', Controllers.Admin);
app.use('/api/ui', Controllers.Ui);
app.use('/', Controllers.Portfolio);
app.use(Middleware.success);
app.use(Middleware.notFound);
app.use(Middleware.error);


module.exports = app;
