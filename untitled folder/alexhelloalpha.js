var express = require('express'); //extends the core http module to ge to production grade server. popular for routing
var app = express(); //this is how you start the express server
app.get('/hello', function(req, res){
	res.send('hello world')
})

app.get('/today', function(req,res){
	res.send({today: new Date()}); //by putting the today in braces it makes it a json call
})


app.use('/', express.static(__dirname))  //this will make node look for a file in the root directory

app.listen(1337, function(){
	console.log('Server is running')
})