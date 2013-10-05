

var client_all_catcha = function(socket) {

  
	var attachListeners = function(catcha_ids){
		
		  var getRowNumber = function($that){
			  
			  var button_id = $that.attr("id"),
			    row_number = button_id.substr(button_id.lastIndexOf('_')+1);
			  
			  return row_number;
			  
		  },
		  validateCatchaInfo = function(catcha_name,catcha_value,row_number){
			  
			  var isValid = true;
				
				var validate_catcha_name = /^[0-9a-z]+$/i;
				if( !(validate_catcha_name.test(catcha_name))){
						$("#catcha_row_"+row_number+" div").eq(1).css({"background":"red","opacity":0.5});
						isValid = false;	
				}
				
				var validate_catcha_value = /^[0-9a-z]+$/i;
				if( (!validate_catcha_value.test(catcha_value))){
						$("#catcha_row_"+row_number+" div").eq(2).css({"background":"red","opacity":0.5});
						isValid = false;
				}
				
			 return isValid; 
		  };

		
		
			$(".delete_catcha").on("vclick",function(e){
				
				   var row_number = getRowNumber($(this)),
				       catcha_id = $("#catcha_row_"+row_number+" div").eq(0).html();
				    
				    socket.emit("delete_catcha_image",catcha_id);
				    
			 e.preventDefault();
			});
			
			$(".edit_catcha").on("vclick",function(e){
			
				var row_number = getRowNumber($(this)),
				    catcha_name = $("#catcha_row_"+row_number+" div").eq(1).html(),
				    catcha_value = $("#catcha_row_"+row_number+" div").eq(2).html();
				
					$("#catcha_row_"+row_number+" div").eq(1).html("<input type='text' id='name_input_"+row_number+"' value='"+catcha_name+"' class='ui-body-d ui-shadow-inset' />");
					$("#catcha_row_"+row_number+" div").eq(2).html("<input type='text' id='value_input_"+row_number+"' value='"+catcha_value+"' class='ui-body-d ui-shadow-inset' />");
					
					$(this).hide();
					$("#edit_catcha_image_"+row_number).hide();
					$("#delete_catcha_"+row_number).hide();
					$("#submit_catcha_"+row_number).show();
			 e.preventDefault();
			});
			
			$(".submit_catcha").on("vclick",function(e){
				
				var row_number = getRowNumber($(this)),
				    catcha_name = $("#name_input_"+row_number).val(),
				    catcha_value = $("#value_input_"+row_number).val(),
				    catcha_id = $("#catcha_row_"+row_number+" div").eq(0).html();
				
				if(validateCatchaInfo(catcha_name,catcha_value,row_number)){
					
					var objCatchaInfo = {
							"catcha_name" : catcha_name,
							"catcha_value" : catcha_value,
							"catcha_id" : catcha_id
							
					};
					
					socket.emit("update_catcha_info",JSON.stringify(objCatchaInfo));
					
				}
				
				e.preventDefault();
			});
			
			$(".edit_catcha_image").on("click",function(e){
				
				var row_number = getRowNumber($(this)),
			    catcha_name = $("#catcha_row_"+row_number+" div").eq(1).html(),
			    catcha_value = $("#catcha_row_"+row_number+" div").eq(2).html(),
			    catcha_id = $("#catcha_row_"+row_number+" div").eq(0).html(),
			    catcha_image_data = $("#catcha_row_"+row_number+" div").eq(3).find("img").attr("src");
				
				console.log(catcha_name,catcha_value,catcha_id,catcha_image_data);
				
				e.preventDefault();
			});
			
			
			$("#delete_all_catcha_images").on("click",function(e){
				e.preventDefault();
				socket.emit("delete_all_catcha_images");
			});
			
	};
	
	$catcha_manager_content = $("#all_catcha_images");
     $(".get_all_catcha_images").on("vclick", function (e) {


	    socket.emit("get_all_catcha_images");

       e.preventDefault();
     });

	
	socket.on("all_catcha_images",function(objCatchaImages) {

		objCatchaImages = JSON.parse(objCatchaImages);
		
	    var catcha_images = ["<br />"],
		    count = 0;
		objCatchaImages.forEach(function(catchaImage){
		 
		    catcha_images.push("<div class='ui-grid-d' id='catcha_row_" + (count) + "'><div class='ui-block-a'>" + catchaImage.catcha_id + "</div><div class='ui-block-b'>" + catchaImage.catcha_name + "</div><div class='ui-block-c'>" + catchaImage.catcha_value + "</div><div class='ui-block-d'><img src='" + catchaImage.catcha_image + "' alt='Catcha Image' /></div><div class='ui-block-e' id='catcha_ops_" + (count) + "'><a href='#' id='delete_catcha_" + (count) + "' class='delete_catcha ui-btn ui-shadow ui-btn-corner-all ui-btn-up-c'><span class='ui-btn-inner'><span class='ui-btn-text'>Delete</span></span></a><a href='#' id='edit_catcha_" + (count) + "' class='edit_catcha ui-btn ui-shadow ui-btn-corner-all ui-btn-up-c'><span class='ui-btn-inner'><span class='ui-btn-text'>Edit</span></span></a><a href='#' id='submit_catcha_" + (count) + "' style='display:none' class='submit_catcha ui-btn ui-shadow ui-btn-corner-all ui-btn-up-c'><span class='ui-btn-inner'><span class='ui-btn-text'>Submit</span></span></a><a href='#' id='edit_catcha_image_" + (count) + "' style='display:none' class='edit_catcha_image ui-btn ui-shadow ui-btn-corner-all ui-btn-up-c'><span class='ui-btn-inner'><span class='ui-btn-text'>Edit Image</span></span></a></div></div><hr />");
		    ++count;
		});
		
		$("#catcha_editor").html(catcha_images.join(''));
		$("#collection_op").html("<br /><a href='#' data-role='button' id='delete_all_catcha_images' class='ui-btn ui-shadow ui-btn-inline ui-btn-up-b'><span class='ui-btn-inner'><span class='ui-btn-text' style='color:white;'>Delete All Catcha Images</span></span></a>");
		attachListeners();
	    $.mobile.changePage("#all_catchas");
	});
	
	socket.on("get_all_catcha_images_error",function(){
		
	    $catcha_manager_content.html("Could not retrieve catcha images");
	    $.mobile.changePage("#all_catchas");

	});
	
	socket.on("update_catcha_info_error",function(){
		
		$all_catcha_notification = $("#all_catcha_notification");
		$all_catcha_notification.html("Could not update catcha info.");
		setTimeout(function(){
			$all_catcha_notification.empty();
		},3000);
		
	});
	
	socket.on("delete_catcha_image_error",function(){
		
		$all_catcha_notification = $("#all_catcha_notification");
		$all_catcha_notification.html("Could not delete catcha image.");
		setTimeout(function(){
			$all_catcha_notification.empty();
		},3000);
		
	});
	
};