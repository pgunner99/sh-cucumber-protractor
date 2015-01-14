var support = require('../support');

var PageLocations = function() {
  this.create_new_group = "https://wwwtest.internal.priorityhealth.com/app/priority-quote-beta/#/new-group";
  this.priorityquote_homepage = "https://wwwtest.internal.priorityhealth.com/app/priority-quote-beta/#/login?returnUrl=%2Flogin"
  this.priorityquote_individual = "https://wwwtest.internal.priorityhealth.com/app/priority-quote-beta/#/quotes/census/individual"
  

};

var FormFieldsId = function() {

	/////////////////////New Page//////////////////////////////////////////
	//Priority Quote Splash Page
	
	this.username = "username";
	this.username_type = "name";
	
	this.password = "password";
	this.password_type = "name";
	
	this.login = "input[type=\"submit\"]";
	this.login_type = "css";
	
	this.submitbutton = "submitbutton";
	this.submitbutton_type = "name";
	
	this.dropDown_tellUsWhoYouAre_Option1 = "//div[@class='row']/form/select//option[1]";
	this.dropDown_tellUsWhoYouAre_Option1_type = "xpath";
	
	this.dropDown_tellUsWhoYouAre_Option2 = "//div[@class='row']/form/select//option[2]";
	this.dropDown_tellUsWhoYouAre_Option2_type = "xpath";
	
	this.dropDown_tellUsWhoYouAre_Option3 = "//div[@class='row']/form/select//option[3]";
	this.dropDown_tellUsWhoYouAre_Option3_type = "xpath";
	
	this.dropDown_tellUsWhoYouAre_Option4 = "//div[@class='row']/form/select//option[4]";
	this.dropDown_tellUsWhoYouAre_Option4_type = "xpath";
	
	this.dropDown_tellUsWhoYouAre_Option5 = "//div[@class='row']/form/select//option[5]";
	this.dropDown_tellUsWhoYouAre_Option5_type = "xpath";
	
	this.PriorityHealth = "Priority Health";
	this.PriorityHealth_type = "linkText";
	
	this.PriorityMedicare = "Priority Medicare";
	this.PriorityMedicare_type = "linkText";
	
	this.UnderstandingHealthReform = "Understanding Health Reform";
	this.UnderstandingHealthReform_type = "linkText";
	
	this.MyGOPoints = "MyGo Points";
	this.MyGOPoints_type = "linkText";
	/*
	element(by.xpath("//div[@id='footer']//a[.='Individual & Family']")).click();
    element(by.xpath("//div[@id='footer']//a[.='Medicare']")).click();
    element(by.xpath("//div[@id='footer']//a[.='Employer & employee']")).click();
    element(by.xpath("//div[@id='footer']//a[.='All plans']")).click();
	*/
	this.Members = "Members";
	this.Members_type = "linkText";
	
	this.Employers = "Employers";
	this.Employers_type = "linkText";
	
	this.Providers = "Providers";
	this.Providers_type = "linkText";
	
	this.Agents = "Agents";
	this.Agents_type = "linkText";
	
	this.Vendors = "Vendors";
	this.Vendors_type = "linkText";
	/*
	element(by.xpath("//div[@id='footer']//a[.='Media']")).click();
    element(by.xpath("//div[@id='footer']//a[.='Careers']")).click();
    element(by.xpath("//div[@id='footer']//a[.='Wellness']")).click();
	*/
	this.EmailUs = "Email Us";
	this.EmailUs_type = "linkText";
	
	this.WebsiteFeedback = "Website Feedback";
	this.websitFeedback_type = "linkText";
	
	this.facebook = "Facebook";
	this.facebook_type = "linkText";
	
	this.twitter = "Twitter";
	this.twitter_type = "linkText";
	
	// element(by.xpath("//div[@id='footer']//span[.='MyGo Points']")).click();
	
	/////////////////////New Page//////////////////////////////////////////
	//Priority Quote create new group page.
	
 	this.GroupName = "GroupName";
 	this.GroupName_type = "name";
 		
 	this.taxId = "taxId";
 	this.taxId_type = "name";
 		
	this.generalAddress = "generalAddress";
	this.generalAddress_type = "name";
		
    this.generalAddress2 = "generalAddress2";
    this.generalAddress2_type = "name";
    	
 	this.generalCity = "generalCity";
 	this.generalCity_type = "name";
 		
 	this.zipcode = "zipcode";
 	this.zipcode_type = "name";
 		
	this.dropDown_ReligousOrganization_No = "//div[@class='col-sm-12']/form/div[3]/div[1]/select//option[2]";
	this.dropDown_ReligousOrganization_No_type = "xpath";
		
	this.dropDown_EffectiveDate_Option6 = "//div[@class='col-sm-12']/form/div[10]/div/effective-date/select//option[6]";
	this.dropDown_EffectiveDate_Option6_type = "xpath";
		
	this.button_creatAndClose = "//div[@class='col-sm-12']//submit-button[.='Create and close']";
	this.button_creatAndClose_type = "xpath";
};
  
var steps = function() {

  this.Given(/^I am logged into MyHealth with user "([^"]*)" and password "([^"]*)"$/, function(user, password, callback) {
      console.log("\n Log into MyHealth with user(" + user + ") and password(" + password + ")");
      support.logIntoMyHealth(this, user, password, function(result){
      setTimeout(callback, 1000);
    });
  });
  
  this.Given(/^I am logged into Priority Quote with user "([^"]*)" and password "([^"]*)"$/, function(user, password, callback) {
      console.log("\n Log into Priority Quote with user(" + user + ") and password(" + password + ")");
      support.logIntoPriorityQuote(this, user, password, function(result){
      setTimeout(callback, 1000);
    });
  });

  
  this.Given(/^I am on MyHealth homepage$/, function(callback) {
  console.log("\n Navigate to My Health homepage");
    support.get(this, 'https://wwwtest.internal.priorityhealth.com/app/universal-login-ui/#/login?appId=MyHealth-QA2', function(result){
      setTimeout(callback, 1000);
    });
  });
  
  this.Given(/^I am on Priority Quote homepage$/, function(callback) {
  console.log("\n Navigate to Priority Quote homepage");
    support.getPQ(this, 'https://wwwtest.internal.priorityhealth.com/app/priority-quote-beta/#/login?returnUrl=%2Flogin', function(result){
      setTimeout(callback, 1000);
    });
  });
  
  this.When(/^I create a small group in Priority Quote$/, function(callback) {
  console.log("\n Click on Small Group");
      support.createSmallGroupInPriorityQuote(this, function(result){
      setTimeout(callback, 1000);
    });
  });
  
  this.When(/^I click on "([^"]*)"$/, function(link, callback) {
 	  var formFieldId = new FormFieldsId();
	  console.log("\n Click on " +formFieldId[link + "_type"] + " link (" + link + ")");
      support.clickOn(this, formFieldId[link], formFieldId[link + "_type"], function(result){
      setTimeout(callback, 1000);
    });
  });
  
  this.When(/^I enter text "([^"]*)" in textbox "([^"]*)"$/, function(text, textbox, callback) {
      var formFieldId = new FormFieldsId();
	  console.log("\n Enter text with values; text(" + text + ") in the " + type + " textbox with (" + textbox + ")" + "(" + formFieldId[textbox] + ")");
      support.enterTextInTextBox(this, text, formFieldId[textbox], formFieldId[textbox + "_type"], function(result){
      setTimeout(callback, 1000);
    });
  });
  
  this.When(/^I click on MyHealth Login$/, function(callback) {
  console.log("\n Click on MyHealth Login");
      support.clickOnCssLink(this, 'input[type=\"submit\"]', function(result){
      setTimeout(callback, 1000);
    });
  });
  
  this.When(/^I click on Priority Quote Login$/, function(callback) {
  console.log("\n Click on \"Priority Quote\" Login");
      support.clickOnCssLink(this, 'input.ph-btn.btn-green', function(result){
      setTimeout(callback, 1000);
    });
  });
  
  this.When(/^I click on the "([^"]*)" id$/, function(link, callback) {
  	  console.log("\n Click on the (" + link +") id");
      support.clickOnId(this, link, function(result){
      setTimeout(callback, 1000);
    });
  });
  
  this.When(/^I wait "([^"]*)" milliseconds$/, function(time, callback) {
  	  console.log("\n wait (" + time + ") milliseconds");
      support.wait(this, time, function(result){
      setTimeout(callback, 1000);
    });
  });
  
  this.Then(/^I should see the text "([^"]*)"/, function(textToFind, callback) {
  		console.log("\n Is the text (" + textToFind + ") present on page");
    	support.isTextPresentOnPage(this, textToFind, function(result){
      	result.should.equal(true);
      	setTimeout(callback, 1000);
    });
  });

  this.Given(/^I am on the "([^"]*)" page$/, function(page, callback) {
        var page_locations = new PageLocations();
        console.log("\n Navigate to page (" + page + ") with url (" + page_locations[page] + ")");

        support.get(this, page_locations[page], function(result){
          setTimeout(callback, 1000);
    });
  });



/* Example functions
  this.Then(/^I should see a "([^"]*)" link$/, function(link, callback) {
    support.findByBinding(this, link, function(result){
      result.getText().then (function(text){
        text.trim().toLowerCase().should.equal(link.trim().toLowerCase());             
        setTimeout(callback, 1000);
      });     
    });
  });

  this.Then(/^I should not see a "([^"]*)" link$/, function(link, callback) {
    support.isElementPresent(this, link, function(result){
      result.should.equal(false);
      setTimeout(callback, 1000);
    });
  });

  this.Then(/^I should see a "([^"]*)"$/, function(link, callback) {
    support.isElementPresentByClass(this, link, function(result){
      result.should.equal(true);
      setTimeout(callback, 1000);
    });
  });*/


};

module.exports = steps;