//The customLogin() function will now authenticate all users.// We want the listener to be run with the Admin group's privileges.directory.setLoginListener("WAK5CRM.customLogin", "Admin");new SharedWorker("Workers/initData.js", "InitData"); //Initialize our Model with some data.