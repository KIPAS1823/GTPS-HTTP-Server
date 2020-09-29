var http = require('http'); 

var server = http.createServer(function (req, res) {   
    
    if (req.url == "/growtopia/server_data.php") {
		var ip = (req.headers['x-forwarded-for'] || '').split(',').pop().trim() || 
        req.connection.remoteAddress || 
        req.socket.remoteAddress || 
        req.connection.socket.remoteAddress
        if(req.method === "POST") {
		console.log('Logs' + req.connection.remoteAddress)
		} //Growtopia Logs Server
        res.write('server|127.0.0.1\nport|17091\ntype|1\n#maint|Maintenance\n\nbeta_server|127.0.0.1\nbeta_port|17091\n\nbeta_type|1\nmeta|localhost\nRTENDMARKERBS1001');
		}
    else
        res.writeHead(404);
});

server.listen(80);
console.log('Port 80 is Up...')
console.log('Simple HTTP coded by NodeJS')
