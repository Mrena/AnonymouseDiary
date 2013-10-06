var startup_da_parent = require("./startup_da_parent");
var query;
var tablesStatus = new Array();

var createMessagesTable = function(client,mysql_con,fs){
	
	query = "CREATE TABLE IF NOT EXISTS Messages(message_id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,type INTEGER NOT NULL,heading VARCHAR(50) NOT NULL UNIQUE,message VARCHAR(5000) NOT NULL,likes INTEGER,dislikes INTEGER)";
	startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
		
		console.trace(error);
		client.emit("create_table_messages_error");
		
	},function(client) {

	    setTableCreateStatus(client, mysql_con, "messages", 1);
		client.emit("messages_table_created");
	
	});
	

};

var createCategoryTable = function (client, mysql_con, fs) {

    query = "CREATE TABLE IF NOT EXISTS Category(category_id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,category_name VARCHAR(50) NOT NULL UNIQUE)";
    startup_da_parent.runQuery(query, mysql_con, client, function (client, error) {

        console.trace(error);
        client.emit("create_table_category_error");

    }, function (client) {

        setTableCreateStatus(client, mysql_con, "category", 1);
        client.emit("category_table_created");

    });


};

var createArticleTable = function (client, mysql_con, fs) {

    query = "CREATE TABLE IF NOT EXISTS Article(category_id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,heading VARCHAR(50) NOT NULL UNIQUE,message VARCHAR(5000) NOT NULL,likes INTEGER,dislikes INTEGER, category VARCHAR(50) NOT NULL REFERENCES Category(category_name))";
    startup_da_parent.runQuery(query, mysql_con, client, function (client, error) {

        console.trace(error);
        client.emit("create_table_article_error");

    }, function (client) {

        setTableCreateStatus(client, mysql_con, "article", 1);
        client.emit("article_table_created");

    });


};


var createReplyMessagesTable = function (client, mysql_con, fs) {

    query = "CREATE TABLE IF NOT EXISTS Reply_Messages(reply_id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,reply_to INTEGER NOT NULL REFERENCES Messages(message_id),reply_number INTEGER NOT NULL,message VARCHAR(5000) NOT NULL,likes INTEGER,dislikes INTEGER)";
    startup_da_parent.runQuery(query, mysql_con, client, function (client, error) {

        console.trace(error);
        client.emit("create_table_reply_messages_error");

    }, function (client) {

        setTableCreateStatus(client, mysql_con, "reply_messages", 1);
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
	    		
	    	    setTableCreateStatus(client, mysql_con, "message_attachments", 1);
        		client.emit("message_attachments_table_created");
        	
	    	});
			
			
			
		};
		
		var createCatchaImagesTable = function(client,mysql_con,fs){
			
			
			query = "CREATE TABLE IF NOT EXISTS Catcha_Images(catcha_id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,catcha_name VARCHAR(50) NOT NULL,catcha_value VARCHAR(50) NOT NULL,catcha_image VARCHAR(5000) NOT NULL)";
	    	startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
	    		
	    		console.log(error);
				client.emit("create_table_catcha_images_error");
	    		
	    	},function(client){
	    		
	    	        setTableCreateStatus(client, mysql_con, "catcha_images", 1);
        			client.emit("catcha_images_table_created");
        	
	    	});
			
		};
		
	
		var createTables = function(client,mysql_con,fs){
	
		         createMessagesTable(client, mysql_con, fs);
		         createReplyMessagesTable(client,mysql_con,fs);
		         createCategoryTable(client, mysql_con, fs);
		         createArticleTable(client, mysql_con, fs);
    			 createMessageAttachmentsTable(client,mysql_con,fs);
    			 createCatchaImagesTable(client,mysql_con,fs);
    			    
    			 console.log("Tables created");	

            };


        var deleteMessagesTable = function(client,mysql_con,fs){
	
	
	        query = "DROP TABLE IF EXISTS Messages";
	        startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
		
		            console.trace(error);
		            client.emit("delete_table_messages_error");
		
		
	        },function(client){
		
	            setTableCreateStatus(client, mysql_con, "messages", 0);
	            setTableSamplesStatus(client, mysql_con, "messages", 0);
		        client.emit("messages_table_deleted");
			
	        });
	
        };

        var deleteCategoryTable = function (client, mysql_con, fs) {


            query = "DROP TABLE IF EXISTS Category";
            startup_da_parent.runQuery(query, mysql_con, client, function (client, error) {

                console.trace(error);
                client.emit("delete_table_category_error");


            }, function (client) {

                setTableCreateStatus(client, mysql_con, "category", 0);
                setTableSamplesStatus(client, mysql_con, "category", 0);
                client.emit("category_table_deleted");

            });

        };

        var deleteArticleTable = function (client, mysql_con, fs) {


            query = "DROP TABLE IF EXISTS Article";
            startup_da_parent.runQuery(query, mysql_con, client, function (client, error) {

                console.trace(error);
                client.emit("delete_table_article_error");


            }, function (client) {

                setTableCreateStatus(client, mysql_con, "article", 0);
                setTableSamplesStatus(client, mysql_con, "article", 0);
                client.emit("article_table_deleted");

            });

        };




var deleteReplyMessagesTable = function(client,mysql_con,fs){
	
	query = "DROP TABLE IF EXISTS Reply_Messages";
	startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
		
		console.trace(error);
		client.emit("delete_table_reply_messages_error");
		
		
	},function(client){
		
	    setTableCreateStatus(client, mysql_con, "reply_messages", 0);
	    setTableSamplesStatus(client, mysql_con, "reply_messages", 0);
		client.emit("reply_messages_table_deleted");
			
		
	});
	
};


var deleteMessageAttachmentsTable = function(client,mysql_con,fs){
	
	query = "DROP TABLE IF EXISTS Message_Attachments";
	startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
		
		console.trace(error);
		client.emit("delete_table_message_attachments_error");
		
		
	},function(client){
		
	    setTableCreateStatus(client, mysql_con, "message_attachments", 0);
	    setTableSamplesStatus(client, mysql_con, "message_attachments", 0);
		client.emit("message_attachments_table_deleted");
			
	});
	
};

var deleteCatchaImagesTable = function(client,mysql_con,fs){
	
	query = "DROP TABLE IF EXISTS Catcha_Images";
	startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
		
		console.trace(error);
		client.emit("delete_table_catcha_images_error");
		
		
	},function(client){
		
	    setTableCreateStatus(client, mysql_con, "catcha_images", 0);
	    setTableSamplesStatus(client, mysql_con, "catcha_images", 0);
		client.emit("catcha_images_table_deleted");
		
	});
	
};

var deleteTables = function(client,mysql_con,fs) {

    deleteMessagesTable(client, mysql_con, fs);
    deleteCategoryTable(client, mysql_con, fs);
    deleteArticleTable(client, mysql_con, fs);
    deleteMessageAttachmentsTable(client, mysql_con, fs);
    deleteCatchaImagesTable(client, mysql_con, fs);
    deleteReplyMessagesTable(client,mysql_con,fs);


};


var emptyMessagesTable = function(client,mysql_con,fs){
	
	query = "TRUNCATE TABLE Messages";
	startup_da_parent.runQuery(query, mysql_con, client, function (client, error) {

	    console.trace(error);
	    client.emit("empty_table_messages_error");


	}, function (client) {

	    setTableSamplesStatus(client, mysql_con, "messages", 0);
	    client.emit("messages_table_emptied");

	});
	    
};

var emptyCategoryTable = function (client, mysql_con, fs) {

    query = "TRUNCATE TABLE Category";
    startup_da_parent.runQuery(query, mysql_con, client, function (client, error) {

        console.trace(error);
        client.emit("empty_table_category_error");


    }, function (client) {

        setTableSamplesStatus(client, mysql_con, "category", 0);
        client.emit("category_table_emptied");

    });

};

var emptyArticleTable = function (client, mysql_con, fs) {

    query = "TRUNCATE TABLE Article";
    startup_da_parent.runQuery(query, mysql_con, client, function (client, error) {

        console.trace(error);
        client.emit("empty_table_article_error");


    }, function (client) {

        setTableSamplesStatus(client, mysql_con, "article", 0);
        client.emit("article_table_emptied");

    });

};

var emptyReplyMessagesTable = function(client,mysql_con,fs){
	
	query = "TRUNCATE TABLE Reply_Messages";
	startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
		
		console.trace(error);
		client.emit("empty_table_reply_messages_error");
		
		
	},function(client){
		
	    setTableSamplesStatus(client, mysql_con, "reply_messages", 0);
		client.emit("reply_messages_table_emptied");
		
	});
	
};

var emptyMessageAttachmentsTable = function(client,mysql_con,fs){
	
	query = "TRUNCATE TABLE Message_Attachments";
	startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
		
		console.trace(error);
		client.emit("empty_table_message_attachments_error");
		
		
	},function(client){
		
	    setTableSamplesStatus(client, mysql_con, "message_attachments", 0);
		client.emit("message_attachments_table_emptied");
		
	});
	
};

var emptyCatchaImagesTable = function(client,mysql_con,fs){
	
	query = "TRUNCATE TABLE Catcha_Images";
	startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
		
		console.trace(error);
		client.emit("empty_table_catcha_images_error");
		
		
	},function(client){
		
	    setTableSamplesStatus(client, mysql_con, "catcha_images", 0);
		client.emit("catcha_images_table_emptied");
		
	});
	
};

var emptyTables = function (client, mysql_con, fs) {

    emptyMessagesTable(client, mysql_con, fs);
    emptyCategoryTable(client, mysql_con, fs);
    emptyArticleTable(client, mysql_con, fs);
    emptyMessageAttachmentsTable(client, mysql_con, fs);
    emptyCatchaImagesTable(client, mysql_con, fs);
    emptyReplyMessagesTable(client,mysql_con,fs);


};


var setTableCreateStatus = function (client,mysql_con,table_name,status) {
    
    query = "UPDATE Tables SET created = "+status+" WHERE name='"+table_name+"'";
    startup_da_parent.runQuery(query, mysql_con, client, function (client, error) {

        console.log(error);
     

    }, function (client) {

        return;

    });


};

var setTableSamplesStatus = function (client, mysql_con, table_name, status) {


    query = "UPDATE Tables SET samples_added = " + status + " WHERE name='" + table_name + "'";
    startup_da_parent.runQuery(query, mysql_con, client, function (client, error) {

        console.log(error);


    }, function (client) {

        return;

    });


};


var createTablesTable = function (client, mysql_con, fs) {

    query = "CREATE TABLE IF NOT EXISTS Tables(name VARCHAR(50) PRIMARY KEY NOT NULL,created INTEGER,samples_added INTEGER,can_message INTEGER)";
    startup_da_parent.runQuery(query, mysql_con, client, function (client, error) {

        console.log(error);
        client.emit("create_table_tables_error");

    }, function (client) {

        var tables_name = new Array("messages", "category", "article", "reply_messages", "message_attachments", "catcha_images");
        var tables_length = tables_name.length,
            added_tables = 0;
        
        tables_name.forEach(function (table) {

            var query = "INSERT INTO Tables(name,created,samples_added,can_message) VALUES('" + table + "',0,0,0)";
            startup_da_parent.runQuery(query, mysql_con, client, function (client, error) {

                console.log(error);

            }, function (client) {

                ++added_tables;
               if (added_tables == tables_length) {
                client.emit("tables_table_created");
                }

            });
            
        });

       

    });

};

var deleteTablesTable = function (client, mysql_con, fs) {

    query = "DROP TABLE IF EXISTS Tables";
    startup_da_parent.runQuery(query, mysql_con, client, function (client, error) {

        console.trace(error);
        client.emit("delete_tables_error");


    }, function (client) {

        client.emit("table_tables_deleted");

    });

};

var getTablesStatus = function (client,mysql_con,fs) {

    query = "SELECT * FROM Tables";

    startup_da_parent.runSelectQuery(query, client, mysql_con, function(client,error) {

        console.log(error);
        client.emit("get_tables_status_error");

    }, function(client,rows,fields) {
       
        client.emit("tables_status",rows);

    });
};


    exports.createTables = createTables;
    exports.deleteTables = deleteTables;
    exports.emptyTables = emptyTables;
    exports.createTablesTable = createTablesTable;
    exports.deleteTablesTable = deleteTablesTable;
    exports.getTablesStatus = getTablesStatus;
	
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