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

    it('should have a signin button', function() {
      return driver.findElement(By.id('signin'));
    });

    it('should have a register button', function() {
      return driver.findElement(By.id('register'));
    });

  });


  describe('Sign In Page', function() {
    let driver;
    this.timeout(60000);

    before(function() {
      driver = env.builder().build();
      return driver.get('http://127.0.0.1:3001');
    });

    after(function() {
      driver.quit();
    });

    it('should go to signin page after clicking signin', function() {
      return driver.findElement(By.id('signin')).then(button => {
        return button.click();
      }).then(() => {
        return driver.findElement(By.className('heading')).getText();
      }).then(headingText => {
        assert.equal(headingText, "Welcome back!");
      });
    });

    it('should load main screen after signing in', function() {
      return driver.findElement(By.name('username')).then(element => {
        return element.sendKeys('demotester');
      }).then(() => {
        return driver.findElement(By.name('password'));
      }).then(element => {
        return element.sendKeys('demotester');
      }).then(() => {
        return driver.findElement(By.css("button[type='submit']"));
      }).then(button => {
        return button.click();
      }).then(() => {
        return driver.wait(until.elementLocated(By.className('homepage')));
      }).then(() => {
        return driver.findElement(By.className('homepage'));
      });
    });

  });


  describe('Register Page', function() {
    let driver;
    this.timeout(60000);

    before(function() {
      driver = env.builder().build();
      return driver.get('http://127.0.0.1:3001');
    });

    after(function() {
      driver.quit();
    });

    it('should go to login page after clicking register', function() {
      return driver.findElement(By.id('register')).then(button => {
        return button.click();
      }).then(() => {
        return driver.findElement(By.className('heading')).getText();
      }).then(headingText => {
        assert.equal(headingText, "Create an account");
      });
    });

  });


});



