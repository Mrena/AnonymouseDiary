AnonymouseDiary
===============

The app will let it users pour their heart out and speak their minds about situations and things which are happening inn their lives in a form of articles and/or post, and other users can comment, vote for the best article or post of the week, and dislike those that they feel are not appropriate for others users of the app. All users of the app will be a using a username of "Anonymous". The app will include added value services which include but not limited to private chat requests with other users of the app, reviling some part of person identifying information like location, ect. Users will be charge using airtime from their phones, and that will not be limited to charging through South African mobile networks. The app will be completely real-time, as in broadcasting changes done by one user to others users without reloading a page or pressing a button for updates.

<b> Installation Instructions </b>
 - To be able to run this app you'll need to download Node.js and have a MySQL server.
 - On your MySQL server create a database named anonymouse.
 - Using your command line tool, navigate to the folder of the app.
 - Once you have navigated to the folder of the app, using the command line tool type in "node server". It should write "info - socket.io started - Server listening on 8000 127.0.0.1".
 - To run the admin side of the app type in "localhost:8000/startup", and then create database tables, starting with the one which keeps track of the other tables' state. It is name "Tables".
 - After you have created all of the required tables click the Catcha Manager button, click the Add Catcha button, and drop all of the catcha images from follwing folder: [project root]/static/catcha_images, or add them individually using the drag and drop feature or using the form.
 - To run the user's side of the app, on your broswer address bar type in "localhost:8000".
 - On a separate broswer window or tab type in "localhost:8000" to have another client connect to the server so you can test things like chat, and to see that the app truly real-time.
 
<b>Contribution Instructions</b>
 - To contribute on this project you'll need a GitHub account, and a version control software like Git or SVN.
 - On Github while logged in into your Github account, you need to navigate to where this project is, and fork it.
 - Once a branch of this project has been created on your GitHub account, you can clone it, do your changes, and then push those changes to your branch.
 - After you have done with your changes, and you feel that you branch is ready to be merged with the main/master branch, you can send a pull request.

 - Check the TODO file to see what needs to be done.