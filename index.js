// var http = require('http');

// //create a server object:
// http.createServer(function (req, res) {
//   res.write('Hello World!'); //write a response to the client
//   res.end(); //end the response
// }).listen(8080); //the server object listens on port 8080
var express = require('express');
var app = express();
app.use(express.static(__dirname + "/public/"));
// app.get('/', function (req, res) {
// res.send("Wele to GeeksforGeeks!");
// });
app.get('/host', function (req, res) {
  res.send("Wlcome to Host");
});
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/helo.html');
});
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/about.html');
});
app.listen(5000);