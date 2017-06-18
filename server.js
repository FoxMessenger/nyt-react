// ----------------------------
// dependencies
// ----------------------------
	var express 	= require('express');
	var bodyParser 	= require('body-parser')
	var app 		= express();
	var mongoose 	= require('mongoose');

// ----------------------------
// Sets up the Express App and Data Parsing
// ----------------------------
	app.use(express.static('public'));
	var PORT 		= process.env.PORT || 3000;

	app.use(express.static(process.cwd() + '/public'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.text());
	app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// ----------------------------
// Mongoose
// ----------------------------
	var connectionString = process.env.MONGODB_URI || "mongodb://localhost/news-worthy"

// Mongoose Database configuration
	mongoose.Promise= Promise;
	mongoose.connect(connectionString);
	var db 			= mongoose.connection;

// Mongoose err message
	db.on('err', function(err) {
	  console.log('mongoose Err: ', err);
	});

// Mongoose success message
	db.once('open', function() {
	  console.log('Mongoose connection successful.');
	});

// ----------------------------
// Run Server
// ----------------------------
	app.listen(PORT, function() {
		console.log('App running on port ' + PORT);
	});