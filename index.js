var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use( bodyParser.urlencoded({extended: true}) );
app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  console.log(request);
  response.render('pages/index');
	//response.writeHead(200, {"Content-Type": "text/plain"});
 	//response.end("Hello World\n");
});

app.get('/foo', function(request, response) {

	response.writeHead(200, {"Content-Type": "text/plain"});
 	response.end("foo");
});
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


