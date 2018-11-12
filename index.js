var http = require('http');
var fs = require('fs');
var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/index') {
        fs.readFile('./index.html', (err, data) => {
            if (err) throw err;
            console.log(data);
            response.write('<p>' + data + '</p>');
            response.end();
        });

    } else {
        response.statusCode = 404;
        fs.readFile('./cat.jpg', (err, data) => {
        response.write(data);
        response.end();
    });
};

server.listen(8080);