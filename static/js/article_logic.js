; (function () {

    // article_logic.js

    var $article_category = $("#article_category"),
        $article_post_heading = $("#article_post_heading"),
        $article_post = $("#article_post"),
        $send_article = $("#send_article"),
        $clear_article = $("#clear_article"),
        $article_categories = $("#article_categories");

    var article_category,
        article_post_heading,
        article_post;

    var validateCategory = function (arg_article_category, arg_article_post_heading, arg_article_post) {

        var is_valid = true;

        if (arg_article_category === "" || arg_article_post_heading === "" || arg_article_post)
            is_valid = false;

        return is_valid;

    };


    socket.emit("get_current_category");

    socket.on("current_category", function (objCategories) {

        JSON.parse(objCategories).forEach(function (Category) {

            $article_category.append("<option value='" + Category.value + "'>" + Category.name + "</option>");
            $article_categories.append("<ul class='ui-listview'><li class='ui-li ui-li-static ui-btn-up-a ui-first-child "+Category.value+"'><h3 class='ui-li-heading'>"+Category.name+"</h3></li></ul><br />");


        });

    });

    $article_categories.on("vclick", function (e) {


        e.preventDefault();
    });


    $send_article.on("vclick", function (e) {

        article_category = $article_category.val();
        article_post_heading = $article_post_heading.val();
        article_post = $article_post.val();

        if (validateArticle(article_category, article_post_heading, article_post)) {

            socket.emit("send_article", JSON.stringify({
                "article_category": article_category,
                "article_post_heading": article_post_heading,
                "article_post": article_post
            }));

        }

        e.preventDefault();
    });







    $clear_article.on("vclick", function (e) {


        e.preventDefault();
    });


}());