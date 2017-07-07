# Simple Express Website
Simple Node.js powered webpage using Express, Jade and Nodemail.
Template is using Bootstrap's Jumbotron page, slightly modified.


# Installing

Make sure you are using Node.js 6.0.0 or higher

Install the modules with

	npm install

# Running

Run the app with

	node app
	
	
You can now access your webpage on `localhost:3000`
	
	
# Setting up the Contact Form
In the app.js file you find the configuration for the account the email is sent from in:

```
host: 'smtp.example.com',
		port: '465',
		secure: true,
		//Credentials go here
		auth: {
			user: 'example@zoho.com',
			pass: 'password'
		}
```

`host`: Your server's smtp address<br>
`port`: Usually 465 for SSL, 587 or 25 for STARTTLS<br>
`secure`: `true` for port 465, `false` for port 587
`user`: Your login username
`pass`: Your password

In `mailOptions` your `from` field should match your `user.`


Keep in mind services like Gmail require you to enable "Less Secure Apps". Read more here
[Allowing less secure apps to access Gmail](https://support.google.com/accounts/answer/6010255)



## Here's what the page looks like
![preview](http://i.imgur.com/QTqmD5R.png "Main page preview")

