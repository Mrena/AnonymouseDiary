var chat_da = require(__dirname+"/data_access/chat_da");

var chat = function (client, mysql_con, fs) {

    var validateMessage = function (message) {

        var is_valid = true;

        if (message == "")
            is_valid = false;

        return is_valid;
    };

    var validateImage = function (image) {

        var is_valid = true;


        return is_valid;
    };
	
    client.on("chat_message",function(chat_message){
		
        if (validateMessage(chat_message)) {

			console.log("about to emit chat message");
            var objChatMessage = {
                "from": "Anonymous",
                "message" : chat_message
            };
			
             console.log(client);
            client.broadcast.emit("chat_message", JSON.stringify(objChatMessage));
            
            //chat_da.storeChatMessage(client,mysql_con,fs,objChatMessage);
	
        }
	});
	
    client.on("send_image", function (objImageData) {


        objImageData = JSON.parse(objImageData);

        if (validateImage(objImageData)) {

			console.log("about to emit chat image");
       
        var objChatImage = {
            "from": "Anonymous",
            "imageData" : objImageData
        };
			
        console.log(objChatImage);
        client.broadcast.emit("chat_image",JSON.stringify(objChatImage));
        //chat_da.storeChatImage(client,mysql_con,fs,objChatMessage);
       }

	});
		
};


exports.chat = chat;