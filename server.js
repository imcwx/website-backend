var express = require('express');

var app 	= express();

app
.set('view engine', 'pug')
.set('views', './layouts')
.set('view cache', false)

app
.use('/resources',express.static('resources'))


app
.get('/', function(req, res, next){
	res.render('base', {
		title : 'HEELLLOOO!!!'
	})
})
.get('/main', function(req, res, next){
	res.render('main', {
		title : 'HEELLLOOO!!!',
		lalala : 'LOL!'
	})
})
.get('/lol', function(req, res, next){
	res.render('main', {
		title : 'HEELLLOOO!!!',
		lalala : 'knssss!'
	})
})

app.listen(80, function(){

	console.log('running')
})