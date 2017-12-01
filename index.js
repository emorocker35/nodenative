'use strict'

const addon = require('./build/Release/addon.node')

console.log(`native addon whoami: ${addon.whoami()}`)

//for (let i = 0; i < 6; i++) {
//  console.log(`native addon increment: ${addon.increment(i)}`)
//}


var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end(`native addon whoami: ${addon.whoami()}`);

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);