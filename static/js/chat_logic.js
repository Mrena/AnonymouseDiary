; (function () {

    var $message = $("#message"),
        $error_message = $("#error_message"),
        $send_message = $("#send_message"),
        $clear_message = $("#clear_message"),
        $chat_messages = $("#chat_messages");

    var validateMessage = function (message) {

        var is_valid = true;



        return is_valid;
    };

  
    $send_message.on("vclick", function (e) {

        var message = $message.val();

        if (validateMessage(message)) {

            socket.emit("chat_message", message);
            $chat_messages.append("<ul class='ui-listview'><li class='ui-li ui-li-static ui-btn-up-a ui-first-child'><h3 class='ui-li-heading'>Anonymous</h3></li><li class='ui-li ui-li-static ui-btn-up-a ui-last-child'><p class='ui-li-desc'>" + message + "</p></li></ul><br />");
            $("html, body").animate({ scrollTop: $clear_message.offset().top }, "slow");
            console.log("Chat message sent");
            $message.val("");

        } else {

            $(".error_message").text("Invalid message");
            $message.focus();

        }

        e.preventDefault();
    });

    $clear_message.on("vclick", function (e) {

        $message.val("");
        $message.focus();

        e.preventDefault();
    });

    $("#chat").on("pageshow", function () {

        $("html, body").animate({ scrollTop: $clear_message.offset().top }, "slow");

    });

    socket.on("chat_message", function (objMessage) {

         console.log("Chat message recieved.");
         objMessage = JSON.parse(objMessage);
        if(validateMessage(objMessage.message)){
        
            $chat_messages.append("<ul class='ui-listview'><li class='ui-li ui-li-static ui-btn-up-a ui-first-child'><h3 class='ui-li-heading'>Anonymous</h3></li><li class='ui-li ui-li-static ui-btn-up-a ui-last-child'><p class='ui-li-desc'>"+objMessage.message+"</p></li></ul><br />");
            $("html, body").animate({ scrollTop : $clear_message.offset().top },"slow");
            console.log("chat message displayed.");

        }

    });

   
}());