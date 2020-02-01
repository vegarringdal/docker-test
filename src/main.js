const http = require('http');
const Koa = require('koa');
const config = require('../config.json');

/***************************************************
 * HTTP
 **/

const apphttp = new Koa();

//calls
apphttp.use(async ctx => {
    ctx.body = `${config.title} at http`;
});

//start server
http.createServer(apphttp.callback()).listen(80);
