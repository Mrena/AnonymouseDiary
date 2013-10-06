; (function () {


    var num_of_tables = 6,
        tables_deleted = 0,
        tables_emptied = 0,
        tables_created = 0,
        samples_added = 0;
    

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

    $("#create_tables_table").on("vclick", function (e) {
        socket.emit("create_tables_table");
        e.preventDefault();
    });

    $("#delete_tables_table").on("vclick", function (e) {
        socket.emit("delete_tables_table");
        e.preventDefault();
    });

    $("#create_tables").on("vclick", function (e) {
        tables_created = 0;
        socket.emit("create_tables");
        e.preventDefault();
    });

    $("#empty_tables").on("vclick", function (e) {
        tables_emptied = 0;
        socket.emit("empty_tables");
        e.preventDefault();
    });

    $("#delete_tables").on("vclick", function (e) {
        tables_deleted = 0;
        socket.emit("delete_tables");
        e.preventDefault();
    });


    // Create events

    socket.on("messages_table_created", function () {

        $messages_status.text("Created");
        allTablesCreated();

    }).on("category_table_created", function () {

        $category_status.text("Created");
        allTablesCreated();

    }).on("article_table_created", function () {

        $article_status.text("Created");
        allTablesCreated();

    }).on("reply_messages_table_created", function () {

        $reply_messages_status.text("Created");
        allTablesCreated();

    }).on("message_attachments_table_created", function () {

        $message_attachments_status.text("Created");
        allTablesCreated();

    }).on("catcha_images_table_created", function () {

        $catcha_images_status.text("Created");
        allTablesCreated();

    });

    // Delete events

    socket.on("messages_table_deleted", function () {

        $messages_status.text("Deleted");
        $("#messages_empty_status").text("Not Added");
        allTablesDeleted();

    }).on("category_table_deleted", function () {

        $category_status.text("Deleted");
        $("#category_empty_status").text("Not Added");
        allTablesDeleted();

    }).on("article_table_deleted", function () {

        $article_status.text("Deleted");
        $("#article_empty_status").text("Not Added");
        allTablesDeleted();

    }).on("reply_messages_table_deleted", function () {

        $reply_messages_status.text("Deleted");
        $("#reply_messages_empty_status").text("Not Added");
        allTablesDeleted();

    }).on("message_attachments_table_deleted", function () {

        $message_attachments_status.text("Deleted");
        $("#message_attachments_empty_status").text("Not Added");
        allTablesDeleted();

    }).on("catcha_images_table_deleted", function () {

        $catcha_images_status.text("Deleted");
        $("#catcha_images_empty_status").text("Not Added");
        allTablesDeleted();


    });

    // Samples added events

    socket.on("sample_message_added", function () {

        $messages_empty_status.text("Added");
        allSamplesAdded();


    }).on("sample_category_added", function () {

        $category_empty_status.text("Added");
        allSamplesAdded();

    }).on("sample_article_added", function () {

        $article_empty_status.text("Added");
        allSamplesAdded();

    }).on("sample_reply_message_added", function () {

        $reply_messages_empty_status.text("Added");
        allSamplesAdded();

    }).on("sample_message_attachments_added", function () {

        $message_attachments_empty_status.text("Added");
        allSamplesAdded();

    }).on("sample_catcha_images_added", function () {

        $catcha_images_empty_status.text("Added");
        allSamplesAdded();

    });

    // Tables emptied events

    socket.on("messages_table_emptied", function () {

        $messages_empty_status.text("Not Added");
        allTablesEmptied();

    }).on("category_table_emptied", function () {

        $category_empty_status.text("Not Added");
        allTablesEmptied();

    }).on("article_table_emptied", function () {

        $article_empty_status.text("Not Added");
        allTablesEmptied();

    }).on("reply_messages_table_emptied", function () {

        $reply_messages_empty_status.text("Not Added");
        allTablesEmptied();

    }).on("message_attachments_table_emptied", function () {

        $message_attachments_empty_status.text("Not Added");
        allTablesEmptied();

    }).on("catcha_images_table_emptied", function () {

        $catcha_images_empty_status.text("Not Added");
        allTablesEmptied();

    });

    socket.emit("get_tables_status").on("tables_status", function (tablesInfo) {
        
        $("#create_tables_table").fadeOut();
        var some_sample_added = 0;
        $.each(tablesInfo, function (index,tableInfo) {

            if (parseInt(tableInfo.created)) {
                
                $("#" + tableInfo.name + "_status").text("Created");
                $("#create_tables").fadeOut();
                $("#delete_tables").fadeIn();
                
            } else {
                
                $("#" + tableInfo.name + "_status").text("Not Created");

            }

            if (parseInt(tableInfo.samples_added)) {

                $("#" + tableInfo.name + "_empty_status").text("Added");
                $("#add_sample_data").fadeOut();
                ++some_sample_added;

            } else {
                
                $("#" + tableInfo.name + "_empty_status").text("Not Added");
                if (!some_sample_added) {
                    //$("#add_sample_data").fadeIn();
                    $("#empty_tables").fadeOut();
                }
            }

        });

    }).on("get_tables_status_error", function () {
        
        $("#create_tables_table").fadeIn();
        $("#create_tables").fadeOut();
        $("#add_sample_data").fadeOut();
        $("#delete_tables").fadeOut();
        $("#empty_tables").fadeOut();
        
    }).on("tables_table_created", function () {
        
        $("#create_tables").fadeIn();

    });
    
    

    var allTablesDeleted = function() {

        ++tables_deleted;
        if (tables_deleted === num_of_tables) {
            $("#create_tables").fadeIn();
            $("#add_sample_data").fadeOut();
            $("#delete_tables").fadeOut();
        }

    };

    var allTablesEmptied = function () {
        ++tables_emptied;
        if (tables_emptied === num_of_tables) {
            $("#add_sample_data").fadeIn();
        }

    };

    var allTablesCreated = function () {
        ++tables_created;
        if (tables_created === num_of_tables) {
            $("#delete_tables").fadeIn();
            $("#create_tables").fadeOut();
            $("#add_sample_data").fadeIn();
        }
    };

    var allSamplesAdded = function () {
        ++samples_added;
        if (samples_added - 2 === num_of_tables) {
            $("#add_sample_data").fadeOut();
            $("#empty_tables").fadeIn();
            
        }

    };

}());