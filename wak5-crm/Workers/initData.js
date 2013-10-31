﻿var _	= require('underscore'),	moment = require('moment'),	menNamesArray = require('generateData').generateNamesArr("firstNamesMen"),	womenNamesArray = require('generateData').generateNamesArr("firstNamesWomen"),	lastNamesArray = require('generateData').generateNamesArr("lastNames"),	streetNamesArray = require('generateData').generateNamesArr("streetNames"),	cityNamesArray = require('generateData').generateNamesArr("cityNames"),	stateNamesArray = require('generateData').generateNamesArr("stateNames"),	workTitlesArray = require('generateData').generateNamesArr("workTitles"),	phoneNumbersArray = require('generateData').generateNamesArr("phoneNumbers"),	companyNamesArray = require('generateData').generateNamesArr("companyNames"),	zipCodesArray = require('generateData').generateNamesArr("zipCodes"),	randomWordsArray = require('generateData').generateNamesArr("randomWords"),		assetsPath = application.getFolder('path') + "assets" + '/',	picsPath = assetsPath + "pictures/",	womensPicFolder = Folder(picsPath + 'women/'),		numberOfLeadsToGenerate = 60,			sessionRef = currentSession(), // Get session.	promoteToken = sessionRef.promoteWith("Administrator"); //temporarily make this session Admin level.//This will be refactored. Right now Activity Subject is hard coded in the combobox definition.function getRandomActivitySubject() {	var subjectArr = [],		len = null;			subjectArr.push("Meet for lunch at Mendys.");	subjectArr.push("Fedex the signed agreement.");	subjectArr.push("Call to schedule a face to face meeting.");	subjectArr.push("Get a status on the contract extension.");		len = subjectArr.length - 1;		return subjectArr[_.random(0, len)];}//This will be refactored. Right now Activity Status is hard coded in the combobox definition.function getRandomActivityStatus() {	var statusArr = [],		len = null;			statusArr.push("Started");	statusArr.push("Not Started");	statusArr.push("Deferred");	statusArr.push("In Progress");	statusArr.push("Completed");	statusArr.push("Waiting on Someone");		len = statusArr.length - 1;		return statusArr[_.random(0, len)];}//This will be refactored. Right now Activity priority is hard coded in the combobox definition.function getRandomActivityPriority() {	var priorityArr = [],		len = null;			priorityArr.push("Normal");	priorityArr.push("High");	priorityArr.push("Highest");	priorityArr.push("Low");	priorityArr.push("Lowest");		len = priorityArr.length - 1;		return priorityArr[_.random(0, len)];}function getRandomUser() {	var theEmployees = ds.User.query("role = :1", "Employee"),		len = theEmployees.length,		randomEmployeeIndex = _.random(0, len-1);			return theEmployees[randomEmployeeIndex];}//This will be refactored. Right now Lead Status is hard coded in the combobox definition. function getRandomLeadStatus() {	var leadStatusArr = [],		len = null;			leadStatusArr.push("-none-");	leadStatusArr.push("Attempted To Contact");	leadStatusArr.push("Contact in Future");	leadStatusArr.push("Contacted");	leadStatusArr.push("Junk Lead");	leadStatusArr.push("Lost Lead");	leadStatusArr.push("Not Contacted");	leadStatusArr.push("Pre Qualified");		len = leadStatusArr.length - 1;		return leadStatusArr[_.random(0, len)];}//This will be refactored. Right now Lead Source is hard coded in the combobox definition. function getRandomLeadSource() {	var leadSourceArr = [],		len = null;				leadSourceArr.push("-none-");	leadSourceArr.push("Advertisement");	leadSourceArr.push("Cold Call");	leadSourceArr.push("Employee Referral");	leadSourceArr.push("External Referral");	leadSourceArr.push("Online Store");	leadSourceArr.push("Partner");	leadSourceArr.push("Trade Show");	leadSourceArr.push("Web Research");		len = leadSourceArr.length - 1;		return leadSourceArr[_.random(0, len)];} //end - getRandomLeadSource().function getRandomIndustry() {	var industryArr = [],		len = null;			industryArr.push("-none-");	industryArr.push("ASP");	industryArr.push("Data/Telecom");	industryArr.push("ERP");	industryArr.push("Government");	industryArr.push("Military");	industryArr.push("Large Enterprise");	industryArr.push("Management ISV");	industryArr.push("Network Equipment");	industryArr.push("Service Provider");	industryArr.push("Small/Medium Enterprise");	industryArr.push("Systems Integrator");	industryArr.push("Wireless");		len = industryArr.length - 1;		return industryArr[_.random(0, len)];} //end - getRandomIndustry().//Create some Users./**/ds.User.remove();var dave = new ds.User({	email: "dave@wakanda.org", 	password: "dave1dave", 	fullName: "David Robbins",	role: "Employee"});dave.save();var greg = new ds.User({	email: "greg@wakanda.org", 	password: "greg1greg", 	fullName: "Greg McCarvell",	role: "Employee"});greg.save();var lyle = new ds.User({	email: "lyle@wakanda.org", 	password: "lyle1lyle", 	fullName: "Lyle Troxell",	role: "Employee"});lyle.save();var tom = new ds.User({	email: "tom@wakanda.org", 	password: "tom1tom", 	fullName: "Tom Miller",	role: "Manager"});tom.save();var wak6 = new ds.User({	email: "wak5@wakanda.org", 	password: "wak5wak5", 	fullName: "Administrator",	role: "Administrator"});wak6.save();ds.Lead.remove();var theLead = null;for (var i = 0; i < numberOfLeadsToGenerate; i += 1) {	var theOwner = getRandomUser();		theLead = new ds.Lead({		firstName: 	require('generateData').getRandomName(womenNamesArray),		lastName: 	require('generateData').getRandomName(lastNamesArray),		street: 	_.random(0, 4011) + " " + require('generateData').getRandomName(streetNamesArray),		city: 		require('generateData').getRandomName(cityNamesArray),		owner: 		theOwner,		avatar: 	loadImage(womensPicFolder.files[_.random(0, 24)]),		leadSource: getRandomLeadSource(),		leadStatus: getRandomLeadStatus(),		state: 		require('generateData').getRandomName(stateNamesArray),		title: 		require('generateData').getRandomName(workTitlesArray),		industry: 	getRandomIndustry(),		phone: 		require('generateData').getRandomName(phoneNumbersArray),		company: 	require('generateData').getRandomName(companyNamesArray),		zip: 		require('generateData').getRandomName(zipCodesArray)	});		theLead.save();		//Create some activities	var activityCount = _.random(0, 3);		for (var j = 0, len = activityCount; j < len; j += 1) {		var theDate = new Date(),			numberOfDaysToAdd = _.random(1, 48);		theDate.setDate(theDate.getDate() + numberOfDaysToAdd); 				new ds.Activity({			type: "task",			status: getRandomActivityStatus(),			priority: getRandomActivityPriority(),			subject: getRandomActivitySubject(),			due: theDate,			dueDateString: moment(theDate).format("MM/DD/YYYY"),			owner: theOwner,			lead: theLead		}).save();				new ds.Note({			title: "Note Title",			body: require('generateData').getRandomName(randomWordsArray),			owner: theOwner,			lead: theLead		}).save();	}		/*	new ds.Note({		title: "test note title",		body: "test note body",		owner: theOwner,		lead: theLead	}).save();	*/	}if (self.close) {    self.close();} 