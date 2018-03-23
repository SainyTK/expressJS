var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//folder public
//url -> localhost:8000:filename.surname
app.use(express.static('public'));

var urlencodedParser = bodyParser.urlencoded({ extended: false }); 
app.use(express.static(__dirname + '/public')); 
  
app.post('/add', urlencodedParser, function(req, res){ 
	// name = a, name = b
   var result = parseInt(req.body.a) + parseInt(req.body.b); 
   res.send('Result = ' + result); 
});


app.get('/',function(req,res){
	res.send('Hello World');
});

//url -> localhost:8000/Foo
app.get('/Foo',function(req,res){
	res.send('Foo');
});

app.use(function(req, res, next){
	console.log('Time : ', Date.now());
});

app.use('/user/:id', (req,res,next)=>{
	console.log('Request Type: ', req.method);
});


var cookieParser = require('cookie-parser');
app.use(cookieParser('keyboard cat'));

app.get('/ck_get', function(req, res) { 
   res.send(req.cookies);
}) 
  
app.get('/ck_set', function(req, res) { 
   res.cookie('a', 10);
   res.send('ok');
});

app.listen(8000);




