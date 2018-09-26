const { Builder, By, until } = require('selenium-webdriver');
const { suite } = require('selenium-webdriver/testing');
const { assert } = require('chai');

suite(function(env) {
  describe('Landing Page', function() {
    let driver;

    before(async function() {
      driver = await env.builder().build();
    });

    after(() => driver.quit());

    it('should have the title, Chatbox App', async function() {
      await driver.get('http://127.0.0.1:3001');
      let title = await driver.getTitle();
      assert.equal(title, 'Chatbox App');
    });
  });

});



