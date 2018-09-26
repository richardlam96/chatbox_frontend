const { Builder, By, until } = require('selenium-webdriver');
const { suite } = require('selenium-webdriver/testing');
const { assert } = require('chai');


suite(function(env) {
  describe('Landing Page', function() {
    let driver;
    this.timeout(60000);

    before(function() {
      driver = env.builder().build();
      return driver.get('http://127.0.0.1:3001');
    });

    after(function() {
      driver.quit();
    });

    it('should have the title, Chatbox App', function() {
      return driver.getTitle()
      .then(title => {
        assert.equal(title, 'Chatbox App');
      })
    });
  });

});



