var support = require('../support');

var PageLocations = function() {
  this.create_new_group = "https://wwwtest.internal.priorityhealth.com/app/priority-quote-beta/#/new-group";
  this.priorityquote_homepage = ""

};

var FormFieldsId = function() {

  this.groupinfo_groupname = "GroupName";
  this.groupinfo_taxid = "taxId";
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

  this.When(/^I enter text "([^"]*)" in textbox with \(ID\) "([^"]*)"$/, function(text, textbox, callback) {
      console.log("\n Enter text with values, text(" + text + ") in the textbox with ID (" + textbox + ")");
      support.enterTextInTextBoxId(this, text, textbox, function(result){
      setTimeout(callback, 1000);
    });
  });
  
  this.When(/^I enter text "([^"]*)" in textbox with name "([^"]*)"$/, function(text, textbox, callback) {
      var formFieldId = new FormFieldsId();
      console.log("\n Enter text with values, text(" + text + ") in the textbox with name(" + textbox + ")" + "(" + formFieldId[textbox] + ")");

      support.enterTextInTextBoxName(this, text, formFieldId[textbox], function(result){
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