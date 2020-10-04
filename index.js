  
var http = require('http'); 

var server = http.createServer(function (req, res) {   
    
    if (req.url == "/growtopia/server_data.php") {
        if(req.method == "POST") {
	console.log('/growtopia/server_data.php [LOGS] ' + req.connection.remoteAddress)
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
