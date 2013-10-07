

var client_add_catcha = function(socket) {

	var validateCatchaInfo = function(catcha_name,catcha_value,image_data){
		
		var isValid = true;
		
		var validate_catcha_name = /^[0-9a-z]+$/i;
		if( !(validate_catcha_name.test(catcha_name))){
				$("#catcha_name_error").html("Please enter a valid Catcha name.");
				$("#catcha_name").val("");
				isValid = false;	
		}
		
		var validate_catcha_value = /^[0-9a-z]+$/i;
		if( (!validate_catcha_value.test(catcha_value))){
				$("#catcha_value_error").html("Please enter a valid Catcha value.");
				$("#catcha_value").val("");
				isValid = false;
		}
		
		
	return isValid;
		
	};
	
	
	$("#catcha_image").on("change",function(e){
		
		var file = e.originalEvent.target.files[0],
		    reader = new FileReader();
		
		
		    
	if(file.type=="image/png"){
		
		
		file.getName(function(file_name){
			
			$("#catcha_name").val(file_name);
			$("#catcha_value").val(file_name);
			
		},function(e){
			
			console.log("We couldn't get the file name, no worries.");
			
		});
		
		
	   $("#catcha_drop_zone").hide();
		
		reader.onload = function(e){
		 
			 image_data = e.target.result;
			 $("#current_catcha").html("<img id='catcha' alt='Catcha Image'/>").find("#catcha").attr("src",e.target.result);
			 console.log(e.target.result+" length: "+(e.target.result).length);
		 
	};
		
		reader.readAsDataURL(file);
		
	}else{
		
 		$("#add_notification").text("Please upload an image.");
 		setTimeout(function(){
 			$("#add_notification").empty();
 		},3000);
 		
		}
		
	});
	
	$("#submit_catcha_image").on("click",function(e){
		
		e.preventDefault();
		
		$("#catcha_name_error").empty();
		$("#catcha_value_error").empty();
		$("#catcha_image_error").empty();
		
		var catcha_name = $.trim($("#catcha_name").val()),
		    catcha_value = $.trim($("#catcha_value").val());
		
		if(validateCatchaInfo(catcha_name,catcha_value)){
			console.log(image_data);
			var objCatcha = {
					"catcha_name" : catcha_name,
					"catcha_value" : catcha_value,
					"image_data" : image_data
			};
			
			socket.emit("add_catcha_image",JSON.stringify(objCatcha));
			
			$("#add_notification").text("Catcha image sent");
			
			image_data = "";
			$("#current_catcha").empty();
			$("#catcha_image").removeAttr("disabled");
			$("#catcha_name").removeAttr("disabled");
			$("#catcha_value").removeAttr("disabled");
			$("#catcha_image").removeAttr("disabled");
			$("#catcha_dropzone").show();
			$("#catcha_name").val("");
			$("#catcha_value").val("");
			$("#catcha_image").val("");
			
		}
		
		
	});
	
	socket.on("catcha_image_added",function(){
		
		$("#add_notification").text("Catcha image added");
		setTimeout(function(){
			$("#add_notification").empty();
		},3000);
		
	});
	
	
	socket.on("add_catcha_image_error",function(){
		
		$("#add_notification").text("Could not add catcha image. Please try an alternative catcha upload.");
		$("#catcha_image").removeAttr("disabled");
		$("#catcha_name").removeAttr("disabled");
		$("#catcha_value").removeAttr("disabled");
		$("#catcha_dropzone").show();
		$("#current_catcha").html("");
		setTimeout(function(){
			$("#add_notification").empty();
		},3000);
		
	});
	
	$("#catcha_dropzone").on("dragenter",function(e){
		
		$(this).addClass("valid_drop_area");
		e.stopPropagation();
		e.preventDefault();
		return false;
		
	}).on("dragover",function(e){
		
		
		e.stopPropagation();
		e.preventDefault();
		return false;
		
	}).on("dragleave",function(e){
		
		$(this).removeClass("valid_drop_area");
		return false;
		
	});
	
	$(document).on("drop",function(e){
		
		e.preventDefault();
		e.stopPropagation();
		return false;
		
	});
	

	document.getElementById("catcha_dropzone").addEventListener("drop",function(e){
		
		e.stopPropagation();
		e.preventDefault();
		$(this).removeClass("valid_drop_area");
		
		
	if(e.dataTransfer.files.length===1){
		var file = e.dataTransfer.files[0];
		
	$("#catcha_image").attr("disabled","disabled");
		
	if(file.type=="image/png"){
			
			file.getName(function(file_name){
				
				$("#catcha_name").val(file_name);
				$("#catcha_value").val(file_name);
				
			},function(e){
				
				console.log("We couldn't get the file name, no worries.");
				
			});
			
			var reader = new FileReader();
			reader.onload = function(e){
				
				$("#current_catcha").html(["<img src='",this.result,"' alt='catcha image' />"].join(''));
				image_data = this.result;
				
			};
			
			reader.readAsDataURL(file);
			
		}else{
			
	 		$("#add_notification").text("Please upload an image.");
	 		setTimeout(function(){
	 			$("#add_notification").empty();
	 		},3000);
	 		
	 }
		
		
	}else{
		
		// multiple file upload
		$("#catcha_image").attr("disabled","disabled");
		$("#catcha_name").attr("disabled","disabled");
		$("#catcha_value").attr("disabled","disabled");
		$("#current_catcha").empty();
		$("<table />").attr("id","catcha_images").appendTo("#current_catcha");
		
		
		[].forEach.call(e.dataTransfer.files,function(file,i){
			
				file.readDataURL(function(image_data){
					
					 file.getName(function(file_name){
						 
						 $("#catcha_images").append(["<tr><td>","<img src='",image_data,"' alt='",file_name,"' />","</td></tr>"].join(''));
							
							var objCatcha = {
									"catcha_name" : file_name,
									"catcha_value" : file_name,
									"image_data" : image_data
							};
							
							socket.emit("add_catcha_image",JSON.stringify(objCatcha));
							$("#add_notification").text("Catcha images sent");
						 
						 
					 },function(e){
						 
						 console.log("ERROR: "+e.message);
					 });
					
				});
					
		});
		
		$("#current_catcha").empty();
		$("#catcha_image").removeAttr("disabled");
		$("#catcha_name").removeAttr("disabled");
		$("#catcha_value").removeAttr("disabled");
		$("#catcha_image").removeAttr("disabled");
		$("#catcha_dropzone").show();
		$("#catcha_name").val("");
		$("#catcha_value").val("");
		$("#catcha_image").val("");
		
		
	}
		
		return false;	
		
	},false);
	
};