	$ gh repo clone irfanalmsyah/backendGDSC
	$ cd backendGDSC
	$ npm start
	
Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client
`ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';`
`flush privileges;`

creating table in mysql:

	create table if not exists loginuser (
    	user_name varchar(255),
    	user_pass varchar(255)
		UNIQUE KEY `user_name` (`user_name`)
	)

	create table if not exists wishlist (
    	user_name varchar(255),
    	movie_id varchar(255),
		UNIQUE (user_name, movie_id)
	)


# To Do List
- [ ] frontend
	 - [ ] wishlist.pug
 
 - [ ] backend
	 - [ ] wishlist system
  
 - [ ] heroku deploy
