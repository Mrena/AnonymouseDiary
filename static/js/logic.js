//logic
; (function () {


    $(".app_name").text("AnonymouseDiary");


    var $add_notification = $("#add_notification"),
        $customization_image = $("#customization_image"),
        $home_notification = $("#home_notification");


    $customization_image.on("dragenter", function (e) {

        $(this).addClass("valid_drop_area");
        e.stopPropagation();
        e.preventDefault();
        return false;

    }).on("dragover", function (e) {


        e.stopPropagation();
        e.preventDefault();
        return false;

    }).on("dragleave", function (e) {

        $(this).removeClass("valid_drop_area");
        return false;

    });

    $(document).on("drop", function (e) {

        e.preventDefault();
        e.stopPropagation();
        return false;

    });

    var homeImage;
    if (localStorage["home_image"]) {

        homeImage = localStorage["home_image"];
        $customization_image.html(["<img src='", homeImage, "' alt='Home Image' />"].join(''));
    }


    document.getElementById("customization_image").addEventListener("drop", function (e) {

        e.stopPropagation();
        e.preventDefault();

        if (e.dataTransfer.files.length === 1) {
            var file = e.dataTransfer.files[0];
            
            if (file.type == "image/png" || file.type === "image/jpeg") {

                if (file.size <= 50000) {
                    var reader = new FileReader();
                    reader.onload = function(e) {

                        localStorage["home_image"] = homeImage = this.result;
                        $customization_image.html(["<img src='", homeImage, "' alt='Home Image' />"].join(''));

                    };

                    reader.readAsDataURL(file);
                } else {

                    $add_notification.fadeIn().text("Please add an image with the size of less than or equal to 50KB.");
                    setTimeout(function () {
                        $add_notification.text("").fadeOut();
                    },3000);
                }

            } else {

                $add_notification.fadeIn().text("Please upload an image which has a type of png or jpeg.");
                setTimeout(function() {
                    $add_notification.empty();
                }, 3000);

            }


        } else {

            $home_notification.text("You can only drop one image").css("color", "red");
            setTimeout(function () {
                $home_notification.text("").fadeOut();
            },3000);
        }
        

        return false;

    }, false);


}());