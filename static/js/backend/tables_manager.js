; (function () {


    var $messages_status = $("#messages_status"),
        $category_status = $("#category_status"),
        $article_status = $("#article_status"),
        $reply_messages_status = $("#reply_messages_status"),
        $message_attachments_status = $("#message_attachments_status"),
        $catcha_images_status = $("#catcha_images_status");

   var $messages_empty_status = $("#messages_empty_status"),
       $category_empty_status = $("#category_empty_status"),
       $article_empty_status = $("#article_empty_status"),
       $reply_messages_empty_status = $("#reply_messages_empty_status"),
       $message_attachments_empty_status = $("#message_attachments_empty_status"),
       $catcha_images_empty_status = $("#catcha_images_empty_status");

    document.getElementById("create_tables_table").addEventListener("click", function (e) {
        socket.emit("create_tables_table");
        e.preventDefault();
    }, false);

    $("#delete_tables_table").on("vclick", function (e) {
        socket.emit("delete_tables_table");
        e.preventDefault();
    });

    document.getElementById("create_tables").addEventListener("click", function (e) {
        socket.emit("create_tables");
        e.preventDefault();
    }, false);

    document.getElementById("empty_tables").addEventListener("click", function (e) {
        socket.emit("empty_tables");
        e.preventDefault();
    }, false);

    document.getElementById("delete_tables").addEventListener("click", function (e) {
        socket.emit("delete_tables");
        e.preventDefault();
    }, false);

    document.getElementById("add_sample_app_text").addEventListener("click", function (e) {


        socket.emit("add_text_content", JSON.stringify(objAppText));
        e.preventDefault();
    }, false);


    // Create events

    socket.on("messages_table_created", function () {

        $messages_status.text("Created");

    }).on("category_table_created", function () {

        $category_status.text("Created");

    }).on("article_table_created", function () {

        $article_status.text("Created");

    }).on("reply_messages_table_created", function () {

        $reply_messages_status.text("Created");

    }).on("message_attachments_table_created", function () {

        $message_attachments_status.text("Created");

    }).on("catcha_images_table_created", function () {

        $catcha_images_status.text("Created");

    });

    // Delete events

    socket.on("messages_table_deleted", function () {

        $messages_status.text("Deleted");

    }).on("category_table_deleted", function () {

        $category_status.text("Deleted");

    }).on("article_table_deleted", function () {

        $article_status.text("Deleted");

    }).on("reply_messages_table_deleted", function () {

        $reply_messages_status.text("Deleted");

    }).on("message_attachments_table_deleted", function () {

        $message_attachments_status.text("Deleted");

    }).on("catcha_images_table_deleted", function () {

        $catcha_images_status.text("Deleted");

    });

    // Samples added events

    socket.on("messages_table_samples_added", function () {

        $messages_empty_status.text("Added");

    }).on("category_table_samples_added", function () {

        $category_empty_status.text("Added");

    }).on("article_table_created_samples_added", function () {

        $article_enpty_status.text("Added");

    }).on("reply_messages_table_created_samples_added", function () {

        $reply_messages_empty_status.text("Added");

    }).on("message_attachments_table_samples_added", function () {

        $message_attachments_empty_status.text("Added");

    }).on("catcha_images_table_samples_added", function () {

        $catcha_images_empty_status.text("Added");

    });

    // Tables emptied events

    socket.on("messages_table_emptied", function () {

        $messages_empty_status.text("Not Added");

    }).on("category_table_emptied", function () {

        $category_empty_status.text("Not Added");

    }).on("article_table_emptied", function () {

        $article_empty_status.text("Not Added");

    }).on("reply_messages_table_emptied", function () {

        $reply_messages_empty_status.text("Not Added");

    }).on("message_attachments_table_emptied", function () {

        $message_attachments_empty_status.text("Not Added");

    }).on("catcha_images_table_emptied", function () {

        $catcha_images_empty_status.text("Not Added");

    });

    socket.emit("get_tables_status");
    socket.on("tables_status", function(tablesInfo) {
       
        $.each(tablesInfo, function (index,tableInfo) {

            parseInt(tableInfo.created) ? $("#" + tableInfo.name + "_status").text("Created") : $("#" + tableInfo.name + "_status").text("Not Created");
            parseInt(tableInfo.samples_added) ? $("#" + tableInfo.name + "_empty_status").text("Added") : $("#" + tableInfo.name + "_empty_status").text("Not Added");

        });

    });


}());