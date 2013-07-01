﻿//Utility library for Wakanda CRM application.

var WAK5CRMUTIL = (function() {
	var wak5CRMUtilObj = {}; //This is the object we will return to create our module.
	
	wak5CRMUtilObj.metroRadioSelect = function(buttonRef) {
		var theRadioButton = $('#' + buttonRef),
			radioButtonsContainer = theRadioButton.parent();
			
		radioButtonsContainer.children().removeClass('selectedRadio');
		theRadioButton.addClass('selectedRadio');
	};
    	
    
    //Add event handlers for Radio Button Tab
    wak5CRMUtilObj.createMainMenubarEventHandler = function(leadsButton, signedInComponent) {
    	$(document).off('click', '.metroRadio button');
		
    	$(document).on('click', '.metroRadio button', function (e) {
	   		WAK5CRMUTIL.metroRadioSelect($(this).attr('id'));
	   		//console.log($(this).attr('id'));
	   		//console.log(leadsButton);
	   		
	   		//Did user click a Radio Tab Button?
	   		switch($(this).attr('id')) {
	   			case leadsButton :
				$$(signedInComponent).loadComponent('/components/leads.waComponent');
				break;
				
				
	   		} //end - switch
		});
	};

	return wak5CRMUtilObj;
}()); //end - WAK5CRMUTIL.