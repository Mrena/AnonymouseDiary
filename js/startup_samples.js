var startup_da_samples = require("./data_access/startup_da_samples");


var startup_samples = function(client,mysql_con,fs){
	
	
	client.on("add_sample_photographers",function(){
		try{
		
			startup_da_samples.addSamplePhotographers(client,mysql_con,fs);
			
		}catch(error){
			console.log(error);
			
		}
		
		
	}).on("add_sample_packages",function(){
		
		try{
			
			startup_da_samples.addSamplePackages(client,mysql_con,fs);
			
		}catch(error){
			console.log(error);
			
		}
		
	}).on("add_sample_orders",function(){
		
		try{
			
			startup_da_samples.addSampleOrders(client,mysql_con,fs);
			
			
		}catch(error){
			console.log(error);
		}
		
	}).on("add_sample_areas",function(){
		
		try{
			
			startup_da_samples.addSampleAreas(client,mysql_con,fs);
			
			
		}catch(error){
			console.log(error);
		}
		
	}).on("add_sample_cities",function(){
		
		try{
			
			startup_da_samples.addSampleCities(client,mysql_con,fs);
			
			
		}catch(error){
			console.log(error);
		}
		
	}).on("add_sample_userIDs",function(){
		
		try{
			
			startup_da_samples.addSampleUserIDs(client,mysql_con,fs);
			
			
		}catch(error){
			console.log(error);
		}
		
	}).on("add_sample_users",function(){
		
		try{
			
			startup_da_samples.addSampleUsers(client,mysql_con,fs);
			
			
		}catch(error){
			console.log(error);
		}
		
	}).on("add_sample_admin",function(){
		
		try{
			
			startup_da_samples.addSampleAdmin(client,mysql_con,fs);
			
			
		}catch(error){
			console.log(error);
		}
		
	}).on("add_sample_admin_rights",function(){
		
		
		try{
			
			startup_da_samples.addSampleAdminRights(client,mysql_con,fs);
			
			
		}catch(error){
			console.log(error);
		}
		
	}).on("add_sample_alerts",function(){
		
		try{
			
			startup_da_samples.addSampleAlerts(client,mysql_con,fs);
			
			
		}catch(error){
			console.log(error);
		}
		
	}).on("create_database",function(database_name){
		  
	try{
		
		  startup_da_samples.createDatabase(database_name,client,mysql_con,fs);
		  
	}catch(error){
		console.log(error);
	}
		  
 }).on("add_sample_data",function(){
		 
	 try{
		 
		 startup_da_samples.addSampleData(client,mysql_con,fs);
		 
 	}catch(error){
		console.log(error);
	}
		 
 }).on("add_sample_delivery_method",function(){
	 
	 try{
		 
		 startup_da_samples.addSampleDeliveryMethod(client,mysql_con,fs);
		 
 	}catch(error){
		console.log(error);
	}
		 
 }).on("add_sample_messages",function(){
	 
	 try{
		 
		 startup_da_samples.addSampleMessages(client,mysql_con,fs);
		 
 	}catch(error){
 		
		console.log(error);
	}
		 
 }).on("add_sample_reply_messages",function(){
	 
	 try{
		 
		 startup_da_samples.addSampleReplyMessages(client,mysql_con,fs);
		 
 	}catch(error){
 		
		console.log(error);
	}
		 
 }).on("add_sample_message_attachments",function(){
	 
	 try{
		 
		 startup_da_samples.addSampleMessageAttachments(client,mysql_con,fs);
		 
 	}catch(error){
		console.log(error);
	}
		 
 });
	
};


exports.startup_samples = startup_samples;