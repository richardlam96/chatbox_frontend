const { Builder, By, until } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
const { assert } = require('chai');

/* Test the Landing Page for proper elements */

describe('Landing Page', function() {
  let driver;
  this.timeout(60000);
  
  before(function() {
    driver = new Builder()
    .forBrowser('firefox')
    .build();

    return driver.get('http://127.0.0.1:3001');
  });

  after(function() {
    driver.quit();
  });

  it('should have the title, Chatbox App', function() {
    return driver.getTitle()
    .then(title => {
      return assert.equal(title, 'Chatbox App');
    });
  });

  it('should have a signin button', function() {
    return driver.findElement(By.id('signin'));
  });

  it('should have a register button', function() {
    return driver.findElement(By.id('register'));
  });

})
