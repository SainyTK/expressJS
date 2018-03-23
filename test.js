var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/',function(req,res){
	res.send('Hello World');
});

app.get('/Foo',function(req,res){
	res.send('Foo');
});

app.use(function(req, res, next){
	console.log('Time : ', Date.now());
});

app.use('/user/:id', (req,res,next)=>{
	console.log('Request Type: ', req.method);
});

app.listen(8000);




