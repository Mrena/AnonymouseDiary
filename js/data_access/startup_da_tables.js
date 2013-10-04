var startup_da_parent = require("./startup_da_parent");


var createMessagesTable = function(client,mysql_con,fs){
	
	var query = "CREATE TABLE IF NOT EXISTS Messages(message_id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,type INTEGER NOT NULL,heading VARCHAR(50) NOT NULL UNIQUE,message VARCHAR(5000) NOT NULL,likes INTEGER,dislikes INTEGER)";
	startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
		
		console.trace(error);
		client.emit("create_table_messages_error");
		
	},function(client){
		
		client.emit("messages_table_created");
	
	});
	

};

var createCategoryTable = function (client, mysql_con, fs) {

    var query = "CREATE TABLE IF NOT EXISTS Category(category_id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,category_name VARCHAR(50) NOT NULL UNIQUE)";
    startup_da_parent.runQuery(query, mysql_con, client, function (client, error) {

        console.trace(error);
        client.emit("create_table_category_error");

    }, function (client) {

        client.emit("category_table_created");

    });


};

var createArticleTable = function (client, mysql_con, fs) {

    var query = "CREATE TABLE IF NOT EXISTS Article(category_id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,heading VARCHAR(50) NOT NULL UNIQUE,message VARCHAR(5000) NOT NULL,likes INTEGER,dislikes INTEGER, category VARCHAR(50) NOT NULL REFERENCES Category(category_name))";
    startup_da_parent.runQuery(query, mysql_con, client, function (client, error) {

        console.trace(error);
        client.emit("create_table_article_error");

    }, function (client) {

        client.emit("article_table_created");

    });


};



var createReplyMessagesTable = function (client, mysql_con, fs) {

    var query = "CREATE TABLE IF NOT EXISTS Reply_Messages(reply_id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,reply_to INTEGER NOT NULL REFERENCES Messages(message_id),reply_number INTEGER NOT NULL,message VARCHAR(5000) NOT NULL,likes INTEGER,dislikes INTEGER)";
    startup_da_parent.runQuery(query, mysql_con, client, function (client, error) {

        console.trace(error);
        client.emit("create_table_reply_messages_error");

    }, function (client) {

        client.emit("reply_messages_table_created");

    });


};
		
	var createMessageAttachmentsTable = function(client,mysql_con,fs){
			
			var attachment_size = 5 * 1024 * 1024; // 5MB
			
			query = "CREATE TABLE IF NOT EXISTS Message_Attachments(attachment_id INTEGER PRIMARY KEY AUTO_INCREMENT,message_id INTEGER REFERENCES Messages(message_id),reply_id INTEGER REFERENCES Reply_Messages(reply_id),attachment_type VARCHAR(20) NOT NULL,attachment VARCHAR("+attachment_size+") NOT NULL)";
	    	startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
	    		
	    		console.log(error);
				client.emit("create_table_message_attachments_error");
	    		
	    	},function(client){
	    		
        		client.emit("message_attachments_created");
        	
	    	});
			
			
			
		};
		
		var createCatchaImagesTable = function(client,mysql_con,fs){
			
			
			query = "CREATE TABLE IF NOT EXISTS Catcha_Images(catcha_id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,catcha_name VARCHAR(50) NOT NULL,catcha_value VARCHAR(50) NOT NULL,catcha_image VARCHAR(5000) NOT NULL)";
	    	startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
	    		
	    		console.log(error);
				client.emit("create_table_catcha_images_error");
	    		
	    	},function(client){
	    		
        			client.emit("catcha_images_created");
        	
	    	});
			
		};
		
	
		var createTables = function(client,mysql_con,fs){
	
		         createMessagesTable(client, mysql_con, fs);
		         createCategoryTable(client, mysql_con, fs);
		         createArticleTable(client, mysql_con, fs);
    			 createMessageAttachmentsTable(client,mysql_con,fs);
    			 createCatchaImagesTable(client,mysql_con,fs);
    			    
    			 console.log("Tables created");	

            };


        var deleteMessagesTable = function(client,mysql_con,fs){
	
	
	        var query = "DROP TABLE IF EXISTS Messages";
	        startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
		
		            console.trace(error);
		            client.emit("delete_table_messages_error");
		
		
	        },function(client){
		
		        client.emit("table_messages_deleted");
			
	        });
	
        };

        var deleteCategoryTable = function (client, mysql_con, fs) {


            var query = "DROP TABLE IF EXISTS Category";
            startup_da_parent.runQuery(query, mysql_con, client, function (client, error) {

                console.trace(error);
                client.emit("delete_table_category_error");


            }, function (client) {

                client.emit("table_category_deleted");

            });

        };

        var deleteArticleTable = function (client, mysql_con, fs) {


            var query = "DROP TABLE IF EXISTS Article";
            startup_da_parent.runQuery(query, mysql_con, client, function (client, error) {

                console.trace(error);
                client.emit("delete_table_article_error");


            }, function (client) {

                client.emit("table_article_deleted");

            });

        };




var deleteReplyMessagesTable = function(client,mysql_con,fs){
	
	var query = "DROP TABLE IF EXISTS Reply_Messages";
	startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
		
		console.trace(error);
		client.emit("delete_table_reply_messages_error");
		
		
	},function(client){
		
		client.emit("table_reply_messages_deleted");
			
		
	});
	
};


var deleteMessageAttachmentsTable = function(client,mysql_con,fs){
	
	var query = "DROP TABLE IF EXISTS Message_Attachments";
	startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
		
		console.trace(error);
		client.emit("delete_table_message_attachments_error");
		
		
	},function(client){
		
		client.emit("table_message_attachments_deleted");
			
	});
	
};

var deleteCatchaImagesTable = function(client,mysql_con,fs){
	
	var query = "DROP TABLE IF EXISTS Catcha_Images";
	startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
		
		console.trace(error);
		client.emit("delete_table_catcha_images_error");
		
		
	},function(client){
		
		client.emit("table_catcha_images_deleted");
		
	});
	
};



var emptyMessagesTable = function(client,mysql_con,fs){
	
	var query = "TRUNCATE TABLE Messages";
	startup_da_parent.runQuery(query, mysql_con, client, function (client, error) {

	    console.trace(error);
	    client.emit("empty_table_messages_error");


	}, function (client) {

	    client.emit("table_messages_emptied");

	});
	    
};

var emptyCategoryTable = function (client, mysql_con, fs) {

    var query = "TRUNCATE TABLE Category";
    startup_da_parent.runQuery(query, mysql_con, client, function (client, error) {

        console.trace(error);
        client.emit("empty_table_category_error");


    }, function (client) {

        client.emit("table_category_emptied");

    });

};

var emptyArticleTable = function (client, mysql_con, fs) {

    var query = "TRUNCATE TABLE Article";
    startup_da_parent.runQuery(query, mysql_con, client, function (client, error) {

        console.trace(error);
        client.emit("empty_table_article_error");


    }, function (client) {

        client.emit("table_article_emptied");

    });

};

var emptyReplyMessagesTable = function(client,mysql_con,fs){
	
	var query = "TRUNCATE TABLE Reply_Messages";
	startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
		
		console.trace(error);
		client.emit("empty_table_reply_messages_error");
		
		
	},function(client){
		
		client.emit("table_reply_messages_emptied");
		
	});
	
};

var emptyMessageAttachmentsTable = function(client,mysql_con,fs){
	
	var query = "TRUNCATE TABLE Message_Attachments";
	startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
		
		console.trace(error);
		client.emit("empty_table_message_attachments_error");
		
		
	},function(client){
		
		client.emit("table_message_attachments_emptied");
		
	});
	
};

var emptyCatchaImagesTable = function(client,mysql_con,fs){
	
	var query = "TRUNCATE TABLE Catcha_Images";
	startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
		
		console.trace(error);
		client.emit("empty_table_catcha_images_error");
		
		
	},function(client){
		
		client.emit("table_catcha_images_emptied");
		
	});
	
};

	
	exports.createTables = createTables;
	
	exports.createMessagesTable = createMessagesTable;
	exports.createCategoryTable = createCategoryTable;
	exports.createArticleTable = createArticleTable;
	exports.createReplyMessagesTable = createReplyMessagesTable;
	exports.createMessageAttachmentsTable = createMessageAttachmentsTable;
	exports.createCatchaImagesTable = createCatchaImagesTable;
	
	exports.deleteMessagesTable = deleteMessagesTable;
	exports.deleteCategoryTable = deleteCategoryTable;
	exports.deleteArticleTable = deleteArticleTable;
	exports.deleteReplyMessagesTable = deleteReplyMessagesTable;
	exports.deleteMessageAttachmentsTable = deleteMessageAttachmentsTable;
	exports.deleteCatchaImagesTable = deleteCatchaImagesTable;
	
	exports.emptyMessagesTable = emptyMessagesTable;
	exports.emptyReplyMessagesTable = emptyReplyMessagesTable;
	exports.emptyCategoryTable = emptyCategoryTable;
	exports.emptyArticleTable = emptyArticleTable;
	exports.emptyMessageAttachmentsTable = emptyMessageAttachmentsTable;
	exports.emptyCatchaImagesTable = emptyCatchaImagesTable;
	
