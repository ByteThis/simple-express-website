var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

var port = 3000;
var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



app.get('/',function(req,res){
	res.render('index', {title: 'Home'});
});
app.get('/about',function(req,res){
	res.render('about', {title: 'About Us'});
});
app.get('/contact',function(req,res){
	res.render('contact');
});

//Post request using nodemailer to send the message
app.post('/contact/send',function(req,res){
	console.log('Sending Email');
	//Change host and port to the correct service provider's details
	var transporter = nodemailer.createTransport({
		host: 'smtp.example.com',
		port: '465',
		secure: true,
		//Credentials go here
		auth: {
			user: 'example@zoho.com',
			pass: 'password'
		}
	});

	//From field must be the same as the user set up in auth field above.
	var mailOptions = {
		from: 'John <john@example.com',
		to: 'Doe <doe@example.com>',
		subject: 'Website Contact',
		text: 'You have a new contact submission:.\nName: ' + req.body.name + '\nEmail: ' + req.body.email + '\nMessage: ' + req.body.message,
		html: '<p>You have a new contact submission</p><ul><li>Name: '+req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Message: '+req.body.message+'</li></ul>'
	};

	transporter.sendMail(mailOptions, function(error, info){
		if(error){
			console.log(error);
			res.redirect('/');
		} else {
			console.log('Message Sent: '+info.response);
			res.redirect('/');
		}
	});
});

app.listen(port);
console.log("Server running on port " + port);