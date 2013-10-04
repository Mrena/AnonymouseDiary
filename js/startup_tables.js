var startup_da_tables = require("./data_access/startup_da_tables");

var startup_tables = function(client,mysql_con,fs){
	
	
	client.on("create_messages_table",function(){
		
		try{
			
			startup_da_tables.createMessagesTable(client,mysql_con,fs);
			
		}catch(error){
			console.log(error);
		
		}
		
	});


	client.on("delete_messages_table",function(){
		
	try{
			
		startup_da_tables.deleteMessagesTable(client,mysql_con,fs);
			
		}catch(error){
			console.log(error);
		}
		
	});
	
	client.on("empty_messages_table",function(){
		
		
	try{
			
		startup_da_tables.emptyMessagesTable(client,mysql_con,fs);
			
		}catch(error){
			console.log(error);
	
		}
		
	});

    // Start of Category events

	client.on("create_category_table", function () {

	    try {

	        startup_da_tables.createCategoryTable(client, mysql_con, fs);

	    } catch (error) {
	        console.log(error);

	    }

	});


	client.on("delete_category_table", function () {

	    try {

	        startup_da_tables.deleteCategoryTable(client, mysql_con, fs);

	    } catch (error) {
	        console.log(error);
	    }

	});

	client.on("empty_category_table", function () {


	    try {

	        startup_da_tables.emptyCategoryTable(client, mysql_con, fs);

	    } catch (error) {
	        console.log(error);

	    }

	});

    // Start of Article events

	client.on("create_article_table", function () {

	    try {

	        startup_da_tables.createArticleTable(client, mysql_con, fs);

	    } catch (error) {
	        console.log(error);

	    }

	});


	client.on("delete_article_table", function () {

	    try {

	        startup_da_tables.deleteArticleTable(client, mysql_con, fs);

	    } catch (error) {
	        console.log(error);
	    }

	});

	client.on("empty_article_table", function () {


	    try {

	        startup_da_tables.emptyArticleTable(client, mysql_con, fs);

	    } catch (error) {
	        console.log(error);

	    }

	});


    // Start of Reply_Messages events

	client.on("create_reply_messages_table", function () {

	    try {

	        startup_da_tables.createReplyMessagesTable(client, mysql_con, fs);

	    } catch (error) {
	        console.log(error);

	    }

	});


	client.on("delete_reply_messages_table", function () {

	    try {

	        startup_da_tables.deleteReplyMessagesTable(client, mysql_con, fs);

	    } catch (error) {
	        console.log(error);
	    }

	});

	client.on("empty_messages_table", function () {


	    try {

	        startup_da_tables.emptyReplyMessagesTable(client, mysql_con, fs);

	    } catch (error) {
	        console.log(error);

	    }

	});

    // Start of Message_Attachments events

	client.on("create_message_attachments_table", function () {

	    try {

	        startup_da_tables.createMessageAttachmentsTable(client, mysql_con, fs);

	    } catch (error) {
	        console.log(error);

	    }

	});


	client.on("delete_message_attachments_table", function () {

	    try {

	        startup_da_tables.deleteMessageAttachmentsTable(client, mysql_con, fs);

	    } catch (error) {
	        console.log(error);
	    }

	});

	client.on("empty_messages_table", function () {


	    try {

	        startup_da_tables.emptyMessageAttachmentsTable(client, mysql_con, fs);

	    } catch (error) {
	        console.log(error);

	    }

	});

	
	
	 client.on("create_tables",function(){
		 
    try{
		 
		 startup_da_tables.createTables(client,mysql_con,fs);
		 
	 }catch(error){
			console.log(error);
		}
		 
	 }); 
	 
};

exports.startup_tables = startup_tables;