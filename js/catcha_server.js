var catcha_server_da = require(__dirname+"/data_access/catcha_server_da");

var catcha_server = function(client,mysql_con,fs){
	
	
	client.on("add_catcha_image",function(objCatcha){
		try{
			
		objCatcha = JSON.parse(objCatcha);
		catcha_server_da.addCatchaImage(client,mysql_con,fs,objCatcha);
		
		}catch(error){
			
			client.emit("add_catcha_image_error");
			console.log(error);
			
			
		}
		
		
	}).on("get_all_catcha_images",function(){
		try{
			
			catcha_server_da.getAllCatchaImages(client,mysql_con,fs);
		
		}catch(error){
			
			client.emit("get_all_catcha_images_error");
			console.log(error);
			
			
		}
		
	}).on("delete_catcha_image",function(catcha_id){
		try{
			
			catcha_server_da.deleteCatchaImage(client,mysql_con,fs,catcha_id);
		
		}catch(error){
			
			client.emit("delete_catcha_image_error");
			console.log(error);
			
			
		}
		
	}).on("update_catcha_info",function(objCatchaInfo){
		try{
			
			objCatchaInfo = JSON.parse(objCatchaInfo);
			
			catcha_server_da.updateCatchaInfo(client,mysql_con,fs,objCatchaInfo);
		
		}catch(error){
			
			client.emit("update_catcha_info_error");
			console.log(error);
			
			
		}
		
	}).on("add_catcha_images",function(objCatcha){
		try{
			
		objCatcha = JSON.parse(objCatcha);
		catcha_server_da.addCatchaImages(client,mysql_con,fs,objCatcha.fs);
		console.log("catcha images: "+objCatcha.fs);
		
		}catch(error){
			
			client.emit("add_catcha_image_error");
			console.log(error);
		
			
		}
		
	}).on("delete_all_catcha_images",function(){
		try{
			
			catcha_server_da.deleteAllCatchaImages(client,mysql_con,fs);
		
		}catch(error){
			
			client.emit("delete_all_catcha_images_error");
			console.log(error);
			
			
		}
		
	}).on("generate_new_catcha",function(){
		try{
			
			catcha_server_da.generateNewCatcha(client,mysql_con,fs);
		
		}catch(error){
			
			client.emit("new_catcha_error");
			console.log(error);
			
			
		}
		
	});
	
	

};


exports.catcha_server = catcha_server;