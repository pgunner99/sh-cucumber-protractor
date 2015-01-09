var Support = function(){
};

Support.prototype.get = function(sut, url, callback){
  sut.browser.get(url).then(function(result) {
    callback(result)
  });
};

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
};

Support.prototype.enterTextInTextBox = function(sut, text, textbox, callback){
  sut.browser.element(sut.by.id(textbox)).sendKeys(text).then(function(result) {
    callback(result)
  });
};

Support.prototype.clickOnMyhealthLogin = function(sut, link, callback){
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


module.exports = new Support();

