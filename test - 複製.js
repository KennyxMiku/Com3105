/*
	index.js
	Entry point for the app.
	To start node index.js
*/

var express = require('express');
var app = express();

app.get('/', function(req, res) {

    res.sendFile(__dirname + "/home.html");
	// res.send("Hello World!");
/* display home.html file
	res.sendFile(__dirname + "/home.html");
*/
});

app.listen(3000, function() {
	console.log('index.js listening to http://127.0.0.1:3000/ or http://localhost:3000/');
});

console.log('End of Program.');

/* for image and css files */
// app.use(express.static('public'));

app.use('/src', express.static(__dirname + '/src'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/Javascript', express.static(__dirname + '/Javascript'));

/*View Catalog*/
app.get('/view_catalog', function(req, res) {
		res.sendFile(__dirname + "/index.html");
});

//add_cart
app.get('/add_cart', function(req, res) {
		res.send("Add Cart - need MySQL");
});

//check_out
app.get('/check_out', function(req, res) {
		res.send("Check Out - need MySQL");
});
		
