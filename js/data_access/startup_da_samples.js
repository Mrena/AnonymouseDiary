var startup_da_parent = require("./startup_da_parent");


var addSamplePhotographers = function(client,mysql_con,fs){
	
		query = "INSERT INTO photographers (f_name,l_name,username,password,email_address,physical_address,operating_area,service_code) VALUES('Kendrick','Lamar','Ken','12345','ken@gmail.com','Durban','Chatsworth',1)";
		startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
			
			console.trace(error);
			var file_name = "startup_da_samples.js",
			line_number = 10;
			startup_da_parent.logDatabaseSystemError(client,error,file_name,line_number);
			client.emit("add_sample_photographers_error");
	
			
		},function(client){
			
			query = "INSERT INTO photographers (f_name,l_name,username,password,email_address,physical_address,operating_area,service_code) VALUES('Joey','Badass','Joey','12345','joey@gmail.com','Empangeni','KwaDlangezwa',1)";
	    	startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
	    		
	    		console.trace(error);
	    		var file_name = "startup_da_samples.js",
				line_number = 22;
				startup_da_parent.logDatabaseSystemError(client,error,file_name,line_number);
				client.emit("add_sample_photographers_error");
	    		
	    	},function(client){
	    		
	    		
	    		var query = "UPDATE Tables SET samples_added = 1 WHERE name='photographers'";
	    		startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
	    			
	    			console.trace(error);
	    			var file_name = "startup_da_samples.js",
	    			line_number = 34;
	    			startup_da_parent.logDatabaseSystemError(client,error,file_name,line_number);
	    			client.emit("add_sample_photographers_error");
	    			
	    		},function(client){
	    			
	    			client.emit("sample_photographers_added");
		    		
	    		});
	    		
	    		
	    	});
			
		});
		
};

var addSampleCities = function(client,mysql_con,fs){
	
		query = "INSERT INTO City(name) VALUES('Durban')";
		startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
			
			console.trace(error);
			var file_name = "startup_da_samples.js",
			line_number = 53;
			startup_da_parent.logDatabaseSystemError(client,error,file_name,line_number);
			client.emit("add_sample_city_error");
			
		},function(client){
			
			query = "INSERT INTO City(name) VALUES('Empangeni')";
	    	startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
	    		
	    		console.trace(error);
	    		var file_name = "startup_da_samples.js",
				line_number = 63;
				startup_da_parent.logDatabaseSystemError(client,error,file_name,line_number);
				client.emit("add_sample_city_error");
	    		
	    	},function(client){
	    		
	    		var query = "UPDATE Tables SET samples_added = 1 WHERE name='city'";
	    		startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
	    			
	    			console.trace(error);
	    			var file_name = "startup_da_samples.js",
	    			line_number = 82;
	    			startup_da_parent.logDatabaseSystemError(client,error,file_name,line_number);
	    			client.emit("add_sample_city_error");
	    			
	    		},function(client){
	    			
	    			client.emit("sample_cities_added");
	    			
	    		});
	    		
	    		
	    	});
			
		});
    
	
};

var addSampleAreas = function(client,mysql_con,fs){
	
		query = "INSERT INTO Areas(city,location) VALUES('Empangeni','KwaDlangezwe')";
		startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
			
			console.trace(error);
			var file_name = "startup_da_samples.js",
			line_number = 92;
			startup_da_parent.logDatabaseSystemError(client,error,file_name,line_number);
			client.emit("add_sample_areas_error");
			
		},function(client){
			
			query = "INSERT INTO Areas(city,location) VALUES('Empangeni','Esikhawini')";
	    	startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
	    		
	    		console.trace(error);
	    		var file_name = "startup_da_samples.js",
				line_number = 119;
				startup_da_parent.logDatabaseSystemError(client,error,file_name,line_number);
				client.emit("add_sample_areas_error");
	    		
	    	},function(client){
	    		
	    		query = "INSERT INTO Areas(city,location) VALUES('Durban','Umlazi')";
	        	startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
	        		
	        		console.trace(error);
	        		var file_name = "startup_da_samples.js",
	    			line_number = 108;
	    			startup_da_parent.logDatabaseSystemError(client,error,file_name,line_number);
	    			client.emit("add_sample_areas_error");
	        		
	        	},function(client){
	        		
	        		query = "INSERT INTO Areas(city,location) VALUES('Durban','Durban Central')";
	            	startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
	            		
	            		console.trace(error);
	            		var file_name = "startup_da_samples.js",
	        			line_number = 118;
	        			startup_da_parent.logDatabaseSystemError(client,error,file_name,line_number);
	        			client.emit("add_sample_areas_error");
	            		
	            	},function(client){
	            		
	            		query = "INSERT INTO Areas(city,location) VALUES('Durban','Durban Central')";
	                	startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
	                		
	                		console.trace(error);
	                		var file_name = "startup_da_samples.js",
	            			line_number = 128;
	            			startup_da_parent.logDatabaseSystemError(client,error,file_name,line_number);
	            			client.emit("add_sample_areas_error");
	                		
	                	},function(client){
	                		
	                		query = "INSERT INTO Areas(city,location) VALUES('Durban','Isipingo')";
	                    	startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
	                    		
	                    		console.trace(error);
	                    		var file_name = "startup_da_samples.js",
	                			line_number = 138;
	                			startup_da_parent.logDatabaseSystemError(client,error,file_name,line_number);
	                			client.emit("add_sample_areas_error");
	                    		
	                    	},function(client){
	                    		
	                    		query = "INSERT INTO Areas(city,location) VALUES('Durban','Chatsworth')";
	                        	startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
	                        		
	                        		console.trace(error);
	                        		var file_name = "startup_da_samples.js",
	                    			line_number = 148;
	                    			startup_da_parent.logDatabaseSystemError(client,error,file_name,line_number);
	                    			client.emit("add_sample_areas_error");
	                        		
	                        	},function(client){
	                        		
	                        		
	                        		var query = "UPDATE Tables SET samples_added = 1 WHERE name='areas'";
	                	    		startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
	                	    			
	                	    			console.trace(error);
	                	    			var file_name = "startup_da_samples.js",
	                	    			line_number = 186;
	                	    			startup_da_parent.logDatabaseSystemError(client,error,file_name,line_number);
	                	    			client.emit("add_sample_areas_error");
	                	    			
	                	    		},function(client){
	                	    			
	                	    			client.emit("sample_areas_added");
		                        		
	                	    		});
	                        		
	                        	});
	                    		
	                    	});
	                		
	                	});
	            		
	            	});
	        		
	        	});
	    		
	    	});
			
		});
    	
};

var addSamplePackages = function(client,mysql_con,fs){
	
		query = "INSERT INTO Packages(print_size,price) VALUES('16x16',16.00)";
		startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
			
			console.trace(error);
			var file_name = "startup_da_samples.js",
			line_number = 185;
			startup_da_parent.logDatabaseSystemError(client,error,file_name,line_number);
			client.emit("add_sample_packages_error");
			
		},function(client){
			
			query = "INSERT INTO Packages(print_size,price) VALUES('24x24',24.00)";
	    	startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
	    		
	    		console.trace(error);
	    		var file_name = "startup_da_samples.js",
				line_number = 195;
				startup_da_parent.logDatabaseSystemError(client,error,file_name,line_number);
				client.emit("add_sample_packages_error");
	    		
	    	},function(client){
	    		
	    		query = "INSERT INTO Packages(print_size,price) VALUES('64x64',64.00)";
	        	startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
	        		
	        		console.trace(error);
	        		var file_name = "startup_da_samples.js",
	    			line_number = 205;
	    			startup_da_parent.logDatabaseSystemError(client,error,file_name,line_number);
	    			client.emit("add_sample_packages_error");
	        		
	        	},function(client){
	        		
	        		var query = "UPDATE Tables SET samples_added = 1 WHERE name='packages'";
		    		startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
		    			
		    			console.trace(error);
		    			var file_name = "startup_da_samples.js",
		    			line_number = 252;
		    			startup_da_parent.logDatabaseSystemError(client,error,file_name,line_number);
		    			client.emit("add_sample_packages_error");
		    			
		    		},function(client){
		    			
		    			client.emit("sample_packages_added");
		        		
		    		});
	        		
	        	});
	    		
	    	});
			
		});
	
};

var addSampleOrders = function(client,mysql_con,fs){
	
		query = "INSERT INTO Orders (order_from,order_to,order_from_id,order_date,order_location,order_image_number,order_price) VALUES('Khulekani Ngongoma','Mrena Systems','122637783920','04-05-1012','Umlazi',1,16)";
		startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
			
			console.trace(error);
			var file_name = "startup_da_samples.js",
			line_number = 232;
			startup_da_parent.logDatabaseSystemError(client,error,file_name,line_number);
			client.emit("add_sample_orders_error");
			
		},function(client){
			
			
			var query = "UPDATE Tables SET samples_added = 1 WHERE name='orders'";
    		startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
    			
    			console.trace(error);
    			var file_name = "startup_da_samples.js",
    			line_number = 289;
    			startup_da_parent.logDatabaseSystemError(client,error,file_name,line_number);
    			client.emit("add_sample_orders_error");
    			
    		},function(client){
    			
    			client.emit("sample_orders_added");
    			
    		});
			
		});

};


	var addSampleUserIDs = function(client,mysql_con,fs){
	
			query = "INSERT INTO UserIDs (userId_date_created,userId_hash_value) VALUES('04-05-2013','1s226d37ds783d9c20')";
			startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
				
				console.trace(error);
				var file_name = "startup_da_samples.js",
				line_number = 255;
				startup_da_parent.logDatabaseSystemError(client,error,file_name,line_number);
				client.emit("add_sample_userIDs_error");
				
			},function(client){
				
				var query = "UPDATE Tables SET samples_added = 1 WHERE name='userIDs'";
	    		startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
	    			
	    			console.trace(error);
	    			var file_name = "startup_da_samples.js",
	    			line_number = 322;
	    			startup_da_parent.logDatabaseSystemError(client,error,file_name,line_number);
	    			client.emit("add_sample_userIDs_error");
	    			
	    		},function(client){
	    			
	    			client.emit("sample_userIDs_added");
					
	    		});
				
		 });
	
	
	};
	
	
	var addSampleUsers = function(client,mysql_con,fs){
		
			query = "INSERT INTO Users(user_id,username,password,email_address,phone_number,f_name,l_name,address,city,special_directions) VALUES('1s226d37ds783d9c20','Mrena','mrena','mrena.pro@gmail.com',0784646803,'Khulekani','Ngongoma','B731 Umlazi for now','Durban','Go right...')";
			startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
				
				console.trace(error);
				var file_name = "startup_da_samples.js",
				line_number = 294;
				startup_da_parent.logDatabaseSystemError(client,error,file_name,line_number);
				client.emit("add_sample_users_error");
				
			},function(client){
				
				
				var query = "UPDATE Tables SET samples_added = 1 WHERE name='users'";
	    		startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
	    			
	    			console.trace(error);
	    			var file_name = "startup_da_samples.js",
	    			line_number = 357;
	    			startup_da_parent.logDatabaseSystemError(client,error,file_name,line_number);
	    			client.emit("add_sample_users_error");
	    			
	    		},function(client){
	    			
	    			client.emit("sample_users_added");
	    			
	    		});
				
				
		 });
		
	
	};
	
	var addSampleAdmin = function(client,mysql_con,fs){
		
			query = "INSERT INTO Admin (username,password,email_address) VALUES('QuicklyBored','bored','bored@gmail.com')";
			startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
				
				console.trace(error);
				var file_name = "startup_da_samples.js",
				line_number = 319;
				startup_da_parent.logDatabaseSystemError(client,error,file_name,line_number);
				client.emit("add_sample_admin_error");
				
			},function(client){
				
				
				var query = "UPDATE Tables SET samples_added = 1 WHERE name='admin'";
	    		startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
	    			
	    			console.trace(error);
	    			var file_name = "startup_da_samples.js",
	    			line_number = 392;
	    			startup_da_parent.logDatabaseSystemError(client,error,file_name,line_number);
	    			client.emit("add_sample_admin_error");
	    			
	    		},function(client){
	    			
	    			client.emit("sample_admin_added");
	    			
	    		});
				
				
		 });
			
	
	};
	
	var addSampleAdminRights = function(client,mysql_con,fs){
		
			query = "INSERT INTO Admin_Rights (username,database_area,service_providers_area,end_users_area,system_errors_area,system_alerts_area) VALUES('QuicklyBored',0,1,1,0,0)";
			startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
				
				console.trace(error);
				var file_name = "startup_da_samples.js",
				line_number = 255;
				startup_da_parent.logDatabaseSystemError(client,error,file_name,line_number);
				client.emit("add_sample_admin_rights_error");
				
			},function(client){
				
				
				var query = "UPDATE Tables SET samples_added = 1 WHERE name='admin_rights'";
	    		startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
	    			
	    			console.trace(error);
	    			var file_name = "startup_da_samples.js",
	    			line_number = 427;
	    			startup_da_parent.logDatabaseSystemError(client,error,file_name,line_number);
	    			client.emit("add_sample_admin_rights_error");
	    			
	    		},function(client){
	    			
	    			client.emit("sample_admin_rights_added");
	    			
	    		});
				
		});
			
	};
	
	var addSampleAlerts = function(client,mysql_con,fs){
		
			query = "INSERT INTO Alerts (new_user_sign_up,new_order,new_provider,username) VALUES('email','email','email','QuicklyBored')";
			startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
				
				console.trace(error);
				var file_name = "startup_da_samples.js",
				line_number = 369;
				startup_da_parent.logDatabaseSystemError(client,error,file_name,line_number);
				client.emit("add_sample_alerts_error");
				
			},function(client){
				
				
				var query = "UPDATE Tables SET samples_added = 1 WHERE name='alerts'";
	    		startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
	    			
	    			console.trace(error);
	    			var file_name = "startup_da_samples.js",
	    			line_number = 462;
	    			startup_da_parent.logDatabaseSystemError(client,error,file_name,line_number);
	    			client.emit("add_sample_alerts_error");
	    			
	    		},function(client){
	    			
	    			client.emit("sample_alerts_added");
	    			
	    		});
				
				
		 });
		
	
	};
	
	var addSampleDeliveryMethod = function(client,mysql_con,fs){
		
		
			query = "INSERT INTO DeliveryMethod (name,description,price) VALUES('standard','Standard: 7 day',15.00)";
			startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
				
				console.trace(error);
				var file_name = "startup_da_samples.js",
				line_number = 369;
				startup_da_parent.logDatabaseSystemError(client,error,file_name,line_number);
				client.emit("add_sample_delivery_method_error");
				
			},function(client){
				
				query = "INSERT INTO DeliveryMethod (name,description,price) VALUES('rush','Rush: 3 days',25.00)";
				startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
					
					console.trace(error);
					var file_name = "startup_da_samples.js",
					line_number = 369;
					startup_da_parent.logDatabaseSystemError(client,error,file_name,line_number);
					client.emit("add_sample_delivery_method_error");
					
				},function(client){
					
					query = "INSERT INTO DeliveryMethod (name,description,price) VALUES('express','Express: next day',35.00)";
					startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
						
						console.trace(error);
						var file_name = "startup_da_samples.js",
						line_number = 369;
						startup_da_parent.logDatabaseSystemError(client,error,file_name,line_number);
						client.emit("add_sample_delivery_method_error");
						
					},function(client){
						
						query = "INSERT INTO DeliveryMethod (name,description,price) VALUES('overnight','Overnight',80.00)";
						startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
							
							console.trace(error);
							var file_name = "startup_da_samples.js",
							line_number = 369;
							startup_da_parent.logDatabaseSystemError(client,error,file_name,line_number);
							client.emit("add_sample_delivery_method_error");
							
						},function(client){
							
							var query = "UPDATE Tables SET samples_added = 1 WHERE name='delivery_method'";
				    		startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
				    			
				    			console.trace(error);
				    			var file_name = "startup_da_samples.js",
				    			line_number = 527;
				    			startup_da_parent.logDatabaseSystemError(client,error,file_name,line_number);
				    			client.emit("add_sample_delivery_method_error");
				    			
				    		},function(client){
				    			
				    			client.emit("sample_delivery_method_added");
				    			
				    		});
							
						});
						
						
					});
					
					
				});
				
				
			});
			
		
	};
	
	
	var addSampleMessages = function(client,mysql_con,fs){
		
		query = "INSERT INTO Messages (user_from, user_to, message, is_read) VALUES('Imani Omari','Khulekani Ngongoma','Here is taking to you, kid',0)";
		startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
			
			console.trace(error);
			var file_name = "startup_da_samples.js",
			line_number = 369;
			startup_da_parent.logDatabaseSystemError(client,error,file_name,line_number);
			client.emit("add_sample_messages_error");
			
		},function(client){
			
			
			var query = "UPDATE Tables SET samples_added = 1 WHERE name='messages'";
    		startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
    			
    			console.trace(error);
    			var file_name = "startup_da_samples.js",
    			line_number = 462;
    			startup_da_parent.logDatabaseSystemError(client,error,file_name,line_number);
    			client.emit("add_sample_messages_error");
    			
    		},function(client){
    			
    			client.emit("sample_messages_added");
    			
    		});
			
			
	 });
	

};

var addSampleReplyMessages = function(client,mysql_con,fs){
	
	query = "INSERT INTO Reply_Messages (reply_from, reply_to, reply, reply_number) VALUES('Khulekani Ngongoma',1,'Who?',1,0)";
	startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
		
		console.trace(error);
		var file_name = "startup_da_samples.js",
		line_number = 369;
		startup_da_parent.logDatabaseSystemError(client,error,file_name,line_number);
		client.emit("add_sample_reply_messages_error");
		
	},function(client){
		
		
		var query = "UPDATE Tables SET samples_added = 1 WHERE name='reply_messages'";
		startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
			
			console.trace(error);
			var file_name = "startup_da_samples.js",
			line_number = 462;
			startup_da_parent.logDatabaseSystemError(client,error,file_name,line_number);
			client.emit("add_sample_reply_messages_error");
			
		},function(client){
			
			client.emit("sample_reply_messages_added");
			
		});
		
		
 });


};

var addSampleMessageAttachments = function(client,mysql_con,fs){
	
	query = "INSERT INTO MessageAttachments (message_id, reply_id, attachment_type, attachment) VALUES(1,1,'image','7737tetegw535wr34wrr5262wygd353eytte663636wyyw7273773wywvsgwujksm73892k2m23b3u4gwtte63re3dgdh6')";
	startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
		
		console.trace(error);
		var file_name = "startup_da_samples.js",
		line_number = 369;
		startup_da_parent.logDatabaseSystemError(client,error,file_name,line_number);
		client.emit("add_sample_message_attachments_error");
		
	},function(client){
		
		
		var query = "UPDATE Tables SET samples_added = 1 WHERE name='message_attachments'";
		startup_da_parent.runQuery(query,mysql_con,client,function(client,error){
			
			console.trace(error);
			var file_name = "startup_da_samples.js",
			line_number = 462;
			startup_da_parent.logDatabaseSystemError(client,error,file_name,line_number);
			client.emit("add_sample_message_attachments_error");
			
		},function(client){
			
			client.emit("sample_message_attachments_added");
			
		});
		
		
 });


};
	

var addSampleData = function(client,mysql_con,fs){
	

	addSamplePhotographers(client,mysql_con);
	addSampleCities(client,mysql_con);
	addSampleAreas(client,mysql_con);
	addSamplePackages(client,mysql_con);
	addSampleOrders(client,mysql_con);
	addSampleUserIDs(client,mysql_con);
	addSampleUsers(client,mysql_con);
	addSampleAdmin(client,mysql_con);
	addSampleAdminRights(client,mysql_con);
	addSampleAlerts(client,mysql_con);
	addSampleDeliveryMethod(client,mysql_con);
	

};



	exports.addSampleData = addSampleData;
	exports.logSystemError = startup_da_parent.logSystemError;
	
	exports.addSamplePhotographers = addSamplePhotographers;
	exports.addSampleCities = addSampleCities;
	exports.addSampleAreas = addSampleAreas;
	exports.addSamplePackages = addSamplePackages;
	exports.addSampleOrders = addSampleOrders;
	exports.addSampleUserIDs = addSampleUserIDs;
	exports.addSampleUsers = addSampleUsers;
	exports.addSampleAdmin = addSampleAdmin;
	exports.addSampleAdminRights = addSampleAdminRights;
	exports.addSampleAlerts = addSampleAlerts;
	exports.addSampleDeliveryMethod = addSampleDeliveryMethod;
	exports.addSampleMessages = addSampleMessages;
	exports.addSampleReplyMessages = addSampleReplyMessages;
	exports.addSampleMessageAttachments = addSampleMessageAttachments;
	