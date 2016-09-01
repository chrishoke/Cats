//Sendkeys function
function SendKeyFunction(variable,message,scenario,testcase,columnName){
    var readexceldata = require('../CommonUtils/ReadExcelData.js');
	var readjson = require('../CommonUtils/ReadJson.js');
    var readsql = require('../CommonUtils/ReadMysql.js');
    var json = readexceldata.readSheetDataIntoJson("./Testdata/Testdata.xlsx", "Sheet1");
    //log
    var log4js = require('D:/TESTING/Protractor/npm-3.10.6/bin/node_modules/log4js');
    
    log4js.configure({
           appenders: [
           {
           type:"file",
           filename:"D:/TESTING/Protractor/ProtractorFW/Logs/log4js.txt",
           maxLogSize:20480,
           backups:3,
           category:"relative-logger"
           }
           ]
           });
    
    var logger = log4js.getLogger('relative-logger');
    //logger.debug("Some debug messages");
    
    variable.sendKeys((readjson.readTestdataJson(json, scenario, testcase, columnName))).
    then(function() {
    return logger.info(message);
    });
    
}
module.exports = {
    SendKeyFunction: SendKeyFunction
};