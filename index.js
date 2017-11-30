'use strict'

const addon = require('./build/Release/addon.node')

console.log(`native addon whoami: ${addon.whoami()}`)

//for (let i = 0; i < 6; i++) {
//  console.log(`native addon increment: ${addon.increment(i)}`)
//}



var http = require('http');
http.createServer(function (req, res) {
    console.log('Got request for ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`native addon whoami: ${addon.whoami()}`);
}).listen(process.env.PORT);
