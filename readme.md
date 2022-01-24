	$ gh repo clone irfanalmsyah/backendGDSC
	$ cd backendGDSC
	$ node app.js
	http://localhost:8081/
	
Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client
`ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';`
`flush privileges;`

# To Do List
- [ ] frontend
	 - [ ] index.pug (include movie list, wishlist button, add to wishlist button, log out button)
	 - [ ] login.pug (include login form, register button)
	 - [ ] login2.pug (include login form, register button, wrong username/pass alert)
	 - [ ] register.pug (include register form, login button)
	 - [ ] wishlist.pug (include wishes)
 
 - [ ] backend
	 - [ ] login system
	 - [ ] register system
	 - [ ] wishlist system
 - [ ] heroku deploy
