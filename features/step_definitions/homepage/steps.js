var support = require('../support');

var steps = function() {

  this.Given(/^I am on the homepage$/, function(callback) {
    support.get(this, 'https://wwwtest.internal.priorityhealth.com/app/universal-login-ui/#/login?appId=MyHealth-QA2', function(result){
      setTimeout(callback, 1000);
    });
  });

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
  });


  this.When(/^I enter text "([^"]*)" in "([^"]*)"$/, function(text, textbox, callback) {
      console.log("\n Enter in enter text step with values text(" + text + ") textbox(" + textbox + ")");

      support.enterTextInTextBox(this, text, textbox, function(result){
      setTimeout(callback, 1000);
    });
  });
  
  this.When(/^I click on MyHealth Login$/, function(callback) {
  console.log("\n Click on MyHealth Login");
      support.clickOnMyhealthLogin(this, 'input[type=\"submit\"]', function(result){
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


};

module.exports = steps;