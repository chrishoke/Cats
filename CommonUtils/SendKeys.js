//Sendkeys function
    var readjson = require('../CommonUtils/ReadJson.js');
    //For reading excel data only
    var readexceldata = require('../CommonUtils/ReadExcelData.js');
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

function SendKeyExcel(variable,message,scenario,testcase,columnName){
    variable.sendKeys((readjson.readTestdataJson(json, scenario, testcase, columnName))).
    then(function() {
    return logger.info(message);
    });  
}

function SendKeySql(variable, message, result){
    variable.sendKeys(result).
    then(function() {
        return logger.info(message);
    });
}
module.exports = {
    SendKeyExcel: SendKeyExcel,
    SendKeySql: SendKeySql
};
