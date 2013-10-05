	//  #!/bin/env node
	//  OpenShift Node application

	//Get the environment variables we need.
	var ip_address  = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
	var port    = process.env.OPENSHIFT_NODEJS_PORT || 8000;

   // Including the Node.js modules we need, and creating a http & web socket server 
	var express = require("express");
	var expressApp = express();
	var app = require("http").createServer(expressApp);
	var io = require("socket.io/lib/socket.io").listen(app);
	var fs = require("fs");
	var url = require("url");
	var mysql = require("mysql");
			
// Connecting to MySQl and selecting a database
	var mysql_con = mysql.createConnection({
		host : "localhost",
		user : "root",
		password : "",
		database : "anonymouse"
			
	});

	


	expressApp.use('/static',express.static(__dirname+"/static"));
	app.listen(port, ip_address);
	console.log("Server listening on ",port,ip_address);


	expressApp.get("/index.html",function(request,response){
	
		handler(request,response);
		
	
	});
	
  // Routing http requests
	expressApp.get("/index",function(request,response){
		handler(request,response);
	});
	
	expressApp.get("/",function(request,response){
		
		handler(request,response);
		
	});

	expressApp.get("/startup.html", function (request, response) {

	    handler(request, response);

	});

	expressApp.get("/startup", function (request, response) {

	    handler(request, response);

	});

	expressApp.get("/admin.html",function(request,response){
		
		handler(request,response);
		
	});

	expressApp.get("/admin", function (request, response) {

	    handler(request, response);

	});

	
	expressApp.get("/*",function(request,response){
		
		pageNotFound(request,response);
		
	});
	
	
	
	function handler(request,response){
	
		var pathname = url.parse(request.url).pathname;
	
		switch(pathname){
		case "/index.html": route(pathname,response);
			break;
		case "/index" : route("/index.html",response);
	    	break;
		case "/" : route("/index.html",response);
			break;
		case "/startup.html" : route(pathname,response);
		    break;
		case "/startup": route("/startup.html", response);
		    break;
		case "/admin.html" : route(pathname,response);
		    break;
		case "/admin": route("/admin.html", response);
		        break;
	
		}
	}


	function route(pathname,response){
		fs.readFile(__dirname+""+pathname,function(error,data){
			if(error){
				response.writeHead(404);
				response.end("Page not found");
			}else{
				response.writeHead(200,{"Content-Type" : "text/html"});
				response.write(data);
				response.end();
			}
		
	});
	
	
}
	
function pageNotFound(request,response){
	
    fs.readFile(__dirname + "/pagenotfound.html", function (error, data) {

	if(error){
		response.writeHead(404);
		response.end("Page not found");
	}else{
		response.writeHead(200,{"Content-Type" : "text/html"});
		response.write(data);
		response.end();
		}

	});
	
}

// Listening to socket connection
   io.sockets.on("connection",function(client){
		
		
		console.log("connected");
		client.emit("hello");
		
		require(__dirname+"/js/authenticator").authenticate(client,mysql_con,fs);
		require(__dirname + "/js/chat").chat(client, mysql_con, fs);

		require("./js/startup_tables").startup_tables(client, mysql_con, fs);
		require("./js/startup_samples").startup_samples(client, mysql_con, fs);
		require("./js/catcha_server").catcha_server(client, mysql_con, fs);
		
		
	});
	



