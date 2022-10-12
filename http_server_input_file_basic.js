/*
	http_server_input_file.js
	
	This server will display the content of html file 
	http default port number is 80
*/

// http module is required to create a web server
var http = require('http');

// fs module is required to read file from file system
var fs = require('fs');

// url module is required to parse the URL
var url = require('url');

// create the server here...

http.createServer(function (request, response) {

	// parse the incoming request's url, which is an object containing path and file name
	var pathname = url.parse(request.url).pathname;
	var postfix = pathname.match(/(\.[^.]+|)$/)[0];
	// print the Pathname of the file
	console.log('Pathname= ' + pathname);

	// copy from pathname starting from position 1 to the end (position 0 will be dropped)
	console.log('pathname.substr(1)= ' + pathname.substr(1));

	// read the requested file content from file system
	fs.readFile(pathname.substr(1), function (err, data) {

			if (err) {
				console.log('Error: open input file!');
				// HTTP status: 404 : NOT FOUND
				response.writeHead(404, {'Content-Type' : 'text/plain'});
				response.write('Error: reading input file');
			} else {
				if(postfix==='html'){

					response.writeHead(200, {'Content-Type': 'text/html'});   
	   
				}else if(postfix==='css'){
	   
				   response.writeHead(200, {'Content-Type': 'text/css'});
	   
				}
	   
				else if(postfix==='js'){
	   
				   response.writeHead(200, {'Content-Type': 'application/javascript'});
	   
				}else{
	   
				}
			
				// write the content of the file to response body
				response.write(data);
			}

		// send the response body
		response.end();
	});

}).listen(80);


console.log('Server running at http://localhost/home.html or http://127.0.0.1:80/home.html');

console.log('Server Program Ended.');