	var startup_da_parent = require("./startup_da_parent");


	var addCatchaImage = function(client,mysql_con,fs,objCatcha){
	
			query = "INSERT INTO Catcha_Images(catcha_name,catcha_value,catcha_image) VALUES('"+objCatcha.catcha_name+"','"+objCatcha.catcha_value+"','"+objCatcha.image_data+"')";
			startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
				
				console.trace(error);
				var file_name = "catcha_server_da.js",
				line_number = 7;
				startup_da_parent.logDatabaseSystemError(client,error,file_name,line_number);
				client.emit("add_catcha_image_error");
				
			},function(client){
				client.emit("catcha_image_added");
		 });
			
	};
	
	
	var getAllCatchaImages = function(client,mysql_con,fs){
		
		try{
		
		var query = "SELECT * FROM Catcha_Images";
		startup_da_parent.runSelectQuery(query,client,mysql_con,function(client,error){
			
			client.emit("get_all_catcha_images_error");
			
			console.trace(error);
			var file_name = "catcha_server_da.js",
			line_number = 148;
			startup_da_parent.logDatabaseSystemError(client,error,file_name,line_number);
			
			
		},function(client,rows,fields){
			
			var catcha_images = Array();
	    	rows.forEach(function(row){
	    		catcha_images.push(row);
	    	
	    	});
	    	
	    	client.emit("all_catcha_images",JSON.stringify(catcha_images));
		});
		
		}catch(error){
			
			client.emit("get_all_catcha_images_error");
			// System error logging
			console.log(error);
			var file_name = "catcha_server_da.js",
			line_number = 213;
			startup_da_parent.logSystemError(client,error,file_name,line_number);
			
		}
		
	};
	
	var deleteCatchaImage = function(client,mysql_con,fs,catcha_id){
		
		try{
		
			var query = "DELETE FROM Catcha_Images WHERE catcha_id='"+catcha_id+"'";
			    startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
			    	
			    		client.emit("delete_catcha_image_error");
			    		console.trace(error);
			    		var file_name = "catcha_server_da.js",
			    		line_number = 69;
			    		startup_da_parent.logDatabaseSystemError(client,error,file_name,line_number);
			    	
			    		},function(client){
			    			
			    			getAllCatchaImages(client,mysql_con,fs);
			    			
			    		});
			    
			}catch(error){
				
				client.emit("delete_catcha_image_error");
				// System error logging
				console.log(error);
				var file_name = "catcha_server_da.js",
				line_number = 78;
				startup_da_parent.logSystemError(client,error,file_name,line_number);
		} 
			       
	};
	
	var updateCatchaInfo = function(client,mysql_con,fs,objCatchaInfo){
		
		try{
		
			var query = "UPDATE Catcha_Images SET catcha_name = '"+objCatchaInfo.catcha_name+"', catcha_value = '"+objCatchaInfo.catcha_value+"' WHERE catcha_id='"+objCatchaInfo.catcha_id+"'";
			    startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
			    	
			    		client.emit("update_catcha_info_error");
			    		console.trace(error);
			    		var file_name = "catcha_server_da.js",
			    		line_number = 69;
			    		startup_da_parent.logDatabaseSystemError(client,error,file_name,line_number);
			    	
			    		},function(client){
			    			getAllCatchaImages(client,mysql_con,fs);
			    		});
			    
			}catch(error){
				
				client.emit("update_catcha_info_error");
				// System error logging
				console.log(error);
				var file_name = "catcha_server_da.js",
				line_number = 78;
				startup_da_parent.logSystemError(client,error,file_name,line_number);
		} 
			    	    
	};
	
	var addCatchaImages = function(client,mysql_con,fs,objCatchas){
		
		var catchas_len = objCatchas.length,
		    added_catchas = 0;
		objCatchas.forEach(function(objCatcha){
			
			query = "INSERT INTO Catcha_Images(catcha_name,catcha_value,catcha_image) VALUES('"+objCatcha.catcha_name+"','"+objCatcha.catcha_value+"','"+objCatcha.image_data+"')";
			startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
				
				console.trace(error);
				var file_name = "catcha_server_da.js",
				line_number = 7;
				startup_da_parent.logDatabaseSystemError(client,error,file_name,line_number);
				client.emit("add_catcha_image_error");
				return;
				
			},function(client){
				
				++added_catchas;
				if(added_catchas==catchas_len){
					client.emit("catcha_image_added");
					added_catchas = 0;
				}
		 });	
	});
		
		
};

var deleteAllCatchaImages = function(client,mysql_con,fs){
	
		query = "TRUNCATE Catcha_Images";
		startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
			
			console.trace(error);
			var file_name = "catcha_server_da.js",
			line_number = 7;
			startup_da_parent.logDatabaseSystemError(client,error,file_name,line_number);
			client.emit("delete_all_catcha_images_error");
			
		},function(client){
			
			getAllCatchaImages(client,mysql_con,fs);
	 });	

};

var generateNewCatcha = function(client,mysql_con,fs){
	
	
	var query = "SELECT COUNT(*) FROM Catcha_Images";
	startup_da_parent.runSelectQuery(query,client,mysql_con,function(client,error){
		
		client.emit("new_catcha_error");
		
		console.trace(error);
		var file_name = "catcha_server_da.js",
		line_number = 148;
		startup_da_parent.logDatabaseSystemError(client,error,file_name,line_number);
		
		
	},function(client,rows,fields){
		
		
    	var rows_number = rows[0]["COUNT(*)"];
    	var random_row = Math.floor(Math.random()*rows_number);
    	if(random_row==0)
    		random_row = 1;
 
    	var query = "SELECT * FROM Catcha_Images WHERE catcha_id='"+random_row+"'";
    	startup_da_parent.runSelectQuery(query,client,mysql_con,function(client,error){
    		
    		client.emit("new_catcha_error");
    		console.trace(error);
    		var file_name = "catcha_server_da.js",
    		line_number = 148;
    		startup_da_parent.logDatabaseSystemError(client,error,file_name,line_number);
    		
    		
    	},function(client,rows,fields){
    		var objCatcha = {
    				"catcha_name"  : rows[0].catcha_name,
    				"catcha_value" : rows[0].catcha_value,
    				"catcha_image" : rows[0].catcha_image
    		};
    	
        	client.emit("new_catcha_image",JSON.stringify(objCatcha));
    	});
    	
	});
	
};


exports.addCatchaImage = addCatchaImage;
exports.addCatchaImages = addCatchaImages;
exports.getAllCatchaImages = getAllCatchaImages;
exports.deleteCatchaImage = deleteCatchaImage;
exports.deleteAllCatchaImages = deleteAllCatchaImages;
exports.updateCatchaInfo = updateCatchaInfo;
exports.generateNewCatcha = generateNewCatcha;

exports.logSystemError = startup_da_parent.logSystemError;