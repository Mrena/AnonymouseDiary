var startup_da_parent = require("./startup_da_parent");


var addSampleCategory = function(client,mysql_con,fs){
	
    query = "INSERT INTO Category(category_name) VALUES('Default')";
		startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
			
			console.log(error);
			client.emit("add_sample_category_error");
	
			
		},function(client){
			
		    client.emit("sample_category_added");
		    setTableSamplesStatus(client, mysql_con, "category", 1);
	    		
		});
		
};

var addSampleArticle = function(client,mysql_con,fs){
	
    query = "INSERT INTO Article(heading,message,likes,dislikes,category) VALUES('Hello World Heading','Hello World',1,0,'Default')";
		startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
			
			console.log(error);
			client.emit("add_sample_article_error");
			
		},function(client){
			
	    	client.emit("sample_article_added");
	    	setTableSamplesStatus(client, mysql_con, "reply_messages", 1);
		    
		});
    
};

var addSampleMessage = function(client,mysql_con,fs){
	
    query = "INSERT INTO Messages(type,heading,message,likes,dislikes) VALUES(1,'Hello World Message Heading','Hello World Message',1,0)";
		startup_da_parent.runQuery(query,mysql_con,client,function(client,error) {

		    console.log(error);
			client.emit("add_sample_message_error");
			
		},function(client){
			  
		    client.emit("sample_message_added");
		    setTableSamplesStatus(client, mysql_con, "messages", 1);
		                        		
		 });
    	
};

var addSampleReplyMessage = function(client,mysql_con,fs){
	
    query = "INSERT INTO Reply_Messages(reply_to,reply_number,message,likes,dislikes) VALUES(1,1,'Hello to you too.',1,0)";
		startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
			
			console.log(error);
			client.emit("add_sample_reply_message_error");
			
		},function(client){
	        		
	        client.emit("sample_reply_message_added");
	        setTableSamplesStatus(client, mysql_con, "reply_messages", 1);
		  		
		});
	
};

var addSampleData = function(client,mysql_con,fs){
	

	addSampleCategory(client,mysql_con);
	addSampleArticle(client,mysql_con);
	addSampleMessage(client,mysql_con);
	addSampleReplyMessage(client,mysql_con);
	

};

var setTableSamplesStatus = function (client, mysql_con, table_name, status) {


    query = "UPDATE Tables SET samples_added = " + status + " WHERE name='" + table_name + "'";
    startup_da_parent.runQuery(query, mysql_con, client, function (client, error) {

        console.log(error);


    }, function (client) {

        return;

    });


};


	
exports.addSampleCategory = addSampleCategory;
exports.addSampleArticle = addSampleArticle;
exports.addSampleMessage = addSampleMessage;
exports.addSampleReplyMessage = addSampleReplyMessage;
