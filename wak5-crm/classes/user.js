//Creating the User classmodel.User = new DataClass("Users");//Add User attributes.model.User.ID = new Attribute("storage", "uuid", "key auto");model.User.email = new Attribute("storage", "string", "btree");model.User.password = new Attribute("calculated", "string");model.User.HA1Key = new Attribute("storage", "string", "btree");model.User.role = new Attribute("storage", "string", "btree");model.User.fullName = new Attribute("storage", "string", "btree");//Calculated Attributes.model.User.password.onGet = function() {	return "*****"; //could also return Null.};model.User.password.onSet = function(value) {	this.HA1Key = directory.computeHA1(this.ID, value);};//Entity methods.model.User.entityMethods = {};model.User.entityMethods.validatePassword = function(password){	var ha1 = directory.computeHA1(this.ID, password);	return (ha1 === this.HA1Key); //true if validated, false otherwise.};//Eventsmodel.User.events = {};model.User.events.onValidate = function() {	var err, emailRegexStr, isValid;	//Check the email to see if it's valid.	if (this.email !== null) {		emailRegexStr = /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;		isValid = emailRegexStr.test(this.email);		if (!isValid) {			err = {error: 8080, errorMessage: "Email is invalid."};		}	}		return err;};