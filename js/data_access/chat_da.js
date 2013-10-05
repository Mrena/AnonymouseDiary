var startup_da_parent  = require(__dirname+"/startup_da_parent");


var storeChatMessage = function(client,mysql_con,fs,objChatMessage){
	

	    var query = "INSERT INTO ChatMessages(from,chat_message) VALUES('"+objChatMessage.from+"','"+objChatMessage.chat_message+"')";
	    startup_da_parent.runQuery(query,client,mysql_con,function(client,error){
	    	
	    	console.log(error);
	    	client.emit("store_chat_error");
	    
	    	
	    },function(client){
	    	
	   
	    	
	    });
	    
	
	    
};

exports.storeChatMessage = storeChatMessage;