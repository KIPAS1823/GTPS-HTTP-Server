  
var http = require('http'); 
var visits = 0;

var server = http.createServer(function (req, res) {  
var ipAddress = req.connection.remoteAddress;
		 if (ipAddress.substr(0, 7) == "::ffff:") {
    ipAddress = ipAddress.substr(7)
  } //convert req.connection.remoteAddress to ipAddress without ::ffff:
    
    if (req.url == "/growtopia/server_data.php") {
        if(req.method == "POST") {
	visits++;
	console.log('')
	console.log('New connection/Growtopia Logs')
	console.log('Total Log    : ' + visits + '')
	console.log('IP           : ' + ipAddress)
        console.log('Method       : ' + req.method)
        console.log('Route        : ' + req.url)
        console.log('Host/IP      : ' + req.headers['host'])
        console.log('HTTP Version : ' + req.httpVersion)
	console.log('')
        //Player informations
	//Coded by GalvinID
        res.write('server|127.0.0.1\nport|17091\ntype|1\n#maint|Simple HTTP Server by NodeJS ~GalvinID \n\nbeta_server|127.0.0.1\nbeta_port|17092\n\nbeta_type|1\nmeta|localhost\nRTENDMARKERBS1001');
		res.end()
		}	
	}
	   else  
res.writeHead(404);
});

server.listen(80);
console.log('Port 80 is Up...')
console.log('Simple HTTP coded by NodeJS')
