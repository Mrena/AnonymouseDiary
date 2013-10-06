; (function () {

    var samples_added_num = 0;
    var someSampleAdded = function () {
        ++samples_added_num;
        if (samples_added_num === 1)
            $("#add_sample_data").fadeOut();
    };

    $("#add_sample_data").on("vclick", function (e) {

        socket.emit("add_sample_category");
        socket.emit("add_sample_article");
        socket.emit("add_sample_message");
        socket.emit("add_sample_reply_message");

        e.preventDefault();
    });



    


}());