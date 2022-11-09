/* To run this program
	node connect.js
*/

var mysql = require('mysql');

var con = mysql.createConnection({
host: "localhost",
user: "user99",
password: "user99",
database: "com3105"
});

con.connect(function(err) {
	if (err) throw err;
	console.log("Connected!");
	con.end();
});
