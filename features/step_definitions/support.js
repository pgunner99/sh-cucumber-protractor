var Support = function(){
};

Support.prototype.logIntoMyHealth = function(sut, user, password, callback){
  sut.browser.get("https://wwwtest.internal.priorityhealth.com/app/universal-login-ui/#/login?appId=MyHealth-QA2");
  sut.browser.element(sut.by.id("username")).sendKeys(user);
  sut.browser.element(sut.by.id("password")).sendKeys(password);
  sut.browser.ignoreSynchronization = true;
  sut.browser.element(sut.by.css("input[type=\"submit\"]")).click();
  sut.browser.sleep(35000).then(function(result) {
    callback(result)
  });
};

Support.prototype.logIntoPriorityQuote = function(sut, user, password, callback){
  sut.browser.get("https://wwwtest.internal.priorityhealth.com/app/priority-quote-beta/#/login?returnUrl=%2Flogin");
  sut.browser.element(sut.by.name("username")).sendKeys(user);
  sut.browser.element(sut.by.name("password")).sendKeys(password);
  sut.browser.ignoreSynchronization = true;
  sut.browser.element(sut.by.css("input.ph-btn.btn-green")).click();
  sut.browser.sleep(5000).then(function(result) {
    callback(result)
  });
};





Support.prototype.createSmallGroupInPriorityQuote = function(sut, callback){
  sut.browser.sleep(1);
  sut.browser.element(sut.by.css("a.ph-btn.btn-green")).click();
  sut.browser.sleep(3000);
  sut.browser.element(sut.by.name("GroupName")).sendKeys("Autotest Small Group");
  sut.browser.element(sut.by.name("taxId")).sendKeys(999999999);
  sut.browser.element(sut.by.xpath("//div[@class='col-sm-12']/form/div[3]/div[1]/select//option[2]")).click();
  sut.browser.element(sut.by.xpath("//div[@class='col-sm-12']/form/div[3]/div[1]/select//option[2]")).click();
  sut.browser.element(sut.by.name("generalAddress")).sendKeys("AutoTest Street Line1");
  sut.browser.element(sut.by.name("generalAddress2")).sendKeys("AutoTest Street Line2");
  sut.browser.element(sut.by.name("generalCity")).sendKeys("AutoTest City");
  sut.browser.element(sut.by.name("zipcode")).sendKeys("49505");
  //sut.browser.setElementSelected: "//div[@class='col-sm-12']//select[.='Choose...Kent']//option[2]"
  sut.browser.element(sut.by.xpath("//div[@class='col-sm-12']/form/div[10]/div/effective-date/select//option[6]")).click();
  sut.browser.sleep(5000);
  sut.browser.element(sut.by.xpath("//div[@class='col-sm-12']//submit-button[.='Create and close']")).click()
  .then(function(result) {
    callback(result)
  });
};

Support.prototype.get = function(sut, url, callback){
  sut.browser.get(url).then(function(result) {
    callback(result)
  });
};

Support.prototype.getPQ = function(sut, url, callback){
  sut.browser.get(url).then(function(result) {
    callback(result)
  });
};


Support.prototype.enterTextInTextBoxId = function(sut, text, textbox, callback){
  sut.browser.element(sut.by.id(textbox)).sendKeys(text).then(function(result) {
    callback(result)
  });
};

Support.prototype.enterTextInTextBoxName = function(sut, text, textbox, callback){
  sut.browser.element(sut.by.name(textbox)).sendKeys(text).then(function(result) {
    callback(result)
  });
};

Support.prototype.clickOnCssLink = function(sut, link, callback){
  sut.browser.ignoreSynchronization = true;
  sut.browser.element(sut.by.css(link)).click().then(function(result) {
    callback(result)
  });
};


Support.prototype.clickOnId = function(sut, link, callback){
  sut.browser.element(sut.by.id(link)).click().then(function(result) {
    callback(result)
  });
};

Support.prototype.wait = function(sut, time, callback){
  sut.browser.sleep(time).then(function(result) {
    callback(result)
  });
};

Support.prototype.isTextPresentOnPage = function(sut, textToFind, callback){
	text = sut.browser.element(sut.by.tagName('html')).getText();
	expect(text).toContain("" + textToFind).then(function(result) {
    callback(result)
  });
};

/* Examples
Support.prototype.findByBinding = function(sut, item, callback){
  sut.browser.findElement(sut.by.binding(item)).then(function(result) {
    callback(result);
  });
};

Support.prototype.isElementPresent = function(sut, find, callback){
  sut.browser.isElementPresent(sut.by.linkText(find)).then(function(result) {
     callback(result)
  });
};

Support.prototype.isElementPresentByClass = function(sut, find, callback){
  sut.browser.isElementPresent(sut.by.css('.'+find)).then(function(result) {
     callback(result)
  });
};*/

module.exports = new Support();

