var http=require('http');
var fs=require('fs');


var server=http.createServer(function(ans,qw)
{ 
  
  qw.writeHead(200,{'Content-Type':'text/html'});
  fs.readFile('text.html', function(err,con)
{
	qw.end(con);
	console.log(con);
});
  //qw.end('Hello World');
});
server.listen(8000);
console.log('Server Hello');
