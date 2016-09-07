/**
 * specfile.js
 */

describe('ECommerce Web App', function() {
	
	var clickfunction = require('../CommonUtils/Click.js');
	var sendkeys = require('../CommonUtils/SendKeys.js');
	var readjson = require('../CommonUtils/ReadJson.js');
	var resultrows1 = {};
	var flow = browser.controlFlow();
    	var conn;
    
    beforeEach(function() {
	console.log('Connection Start');
	conn = readsql.createConnection();
	browser.get('http://ecommerce.aisel.co/en/');
        browser.driver.manage().window().maximize();
	});
    
/*    it('create a new account', function() {
        var dashboard = element(by.css('.dropdown.ng-scope>a'));
        clickfunction.Click(dashboard, "clicked on dashboard");
        var createAccount = element.all(by.css('.thumb')).get(0);
        clickfunction.Click(createAccount, "clicked on createAccount");
        var email = element(by.css('#registerEmail'));
        sendkeys.SendKeyFunction(email, "entering data in email field", "1","username");
        var password = element(by.css('#registerPassword'));
        sendkeys.SendKeyFunction(password, "entering data in password field", "1", "password");      
        var login = element(by.css('.dropdown.ng-scope>a'));
        clickfunction.Click(login, "clicked on " +login);
    });*/

	it('should select Products link', function() {
		//browser.pause();
        var email = element(by.xpath("//input[@id='signInEmail']"));
        var password = element(by.xpath("//input[@id='signInPassword']"));
        var login = element(by.xpath("//div/button[text()='Log In'][@class='btn btn-primary'][@type='submit']"));
        var close = element(by.css('button[ng-click*="$dismiss"]'));
	element(by.css('a[href="/en/products/"]')).click();
	element(by.xpath('//a[@class="thumb ng-binding"]')).click();
	expect(element(by.css('h2[class="ng-binding"]')).getText()).toEqual('Nike Baseball Hat 100');
	element(by.css('button[class="btn btn-success"]')).click();
	email.click();
        readsql.executeQuery(conn, "select * from account", function(resultrows){
		console.log("Rows: " + JSON.stringify(resultrows)); 
		var data = readjson.readSqldataJson(resultrows, "1" , "username");
		email.sendKeys(data);
	});
	});
});
	
