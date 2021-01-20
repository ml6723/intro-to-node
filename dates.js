var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	var q = url.parse(req.url, true).query;
	var dates = q.year + ' ' + q.month;
	res.write(dates);
	res.end();
}).listen(8080);