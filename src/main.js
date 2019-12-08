const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
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

/***************************************************
 * HTTPS
 **/

const apphttps = new Koa();
const httpsKey = fs.readFileSync(path.resolve(__dirname, `../httpsCertificates/private.key`), 'utf8');
const httpsCert = fs.readFileSync(path.resolve(__dirname, `../httpsCertificates/certificate.crt`), 'utf8');

//calls
apphttps.use(async ctx => {
    ctx.body = `${config.title} at https`;
});

//start server
https
    .createServer(
        {
            key: httpsKey,
            cert: httpsCert
        },
        apphttps.callback()
    )
    .listen(443);
console.log(`${config.title} started`);
