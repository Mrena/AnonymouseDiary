
var startup_da_parent = require("./startup_da_parent");
var startup_da_tables = require("./startup_da_tables");
var startup_da_samples = require("./startup_da_samples");
var startup_da_logs = require("./startup_da_logs");



	var createDatabase = function(database_name,client){
	
		var mysql_con = connection();
			mysql_con.connect();
	
	    query = "CREATE Database "+database_name;
		try{
		
			runQuery(query,mysql_con,client,function(client){
				console.log("Database created");
			});
	
		}catch(ex){
		
			console.trace(ex);
		}
	
		
	
	};
	
	/*

	var createTables = function(client){
	
		startup_da_tables.createTables(client);

	};

*/
	var addSampleData = function(client){
	
		startup_da_samples.addSampleData(client);
	};

	var createLogFiles = function(client){
		startup_da_logs.createLogFiles(client);
	};
	
	exports.createDatabase = createDatabase;
	exports.createLogFiles = createLogFiles;
	//exports.createTables = createTables;
	exports.addSampleData = addSampleData;
	exports.logSystemError = startup_da_parent.logSystemError;
	
