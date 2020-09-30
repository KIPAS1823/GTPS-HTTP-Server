  
var http = require('http'); 

var server = http.createServer(function (req, res) {   
    
    if (req.url == "/growtopia/server_data.php") {
        if(req.method == "POST") {
	console.log('Growtopia Logs from ' + req.connection.remoteAddress + ' In route ' + req.url)
        res.write('server|127.0.0.1\nport|17091\ntype|1\n#maint|Simple HTTP Server by NodeJS ~GalvinID \n\nbeta_server|127.0.0.1\nbeta_port|17091\n\nbeta_type|1\nmeta|localhost\nRTENDMARKERBS1001');
		}	
	}
	   else  
console.log('[Unknown-Request] from ' + req.connection.remoteAddress + 'in route ' + req.url)
req.destroy();
});

server.listen(80);
console.log('Port 80 is Up...')
console.log('Simple HTTP coded by NodeJS')
