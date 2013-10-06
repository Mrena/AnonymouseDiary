var startup_da_samples = require("./data_access/startup_da_samples");


var startup_samples = function(client,mysql_con,fs) {



    client.on("add_sample_category", function() {
        try {

            startup_da_samples.addSampleCategory(client, mysql_con, fs);

        } catch(error) {
            console.log(error);

        }


    }).on("add_sample_article", function() {

        try {

            startup_da_samples.addSampleArticle(client, mysql_con, fs);

        } catch(error) {
            console.log(error);

        }

    }).on("add_sample_message", function() {

        try {

            startup_da_samples.addSampleMessage(client, mysql_con, fs);


        } catch(error) {
            console.log(error);
        }

    }).on("add_sample_reply_message", function() {

        try {

            startup_da_samples.addSampleReplyMessage(client, mysql_con, fs);


        } catch(error) {
            console.log(error);
        }

    });
	
};


exports.startup_samples = startup_samples;