var readsql = require('../CommonUtils/ReadMysql.js');
function readTestdataJson(json, scenarioName, testcaseName, columnName){
	var jsonpath = require('D:/TESTING/Protractor/npm-3.10.6/bin/node_modules/jsonpath-plus');
	var result;
	result = jsonpath({json: json, path: '$..[?(@.ScenarioID == "' + scenarioName + '" && @.TestcaseID == "' + testcaseName + '")].' + columnName + ''});
	console.log(columnName + ": " + result[0]);
	return result[0];
}
function readSqldataJson(json, id, columnName){
    var jsonpath = require('D:/TESTING/Protractor/npm-3.10.6/bin/node_modules/jsonpath-plus');
	var result;
    console.log(JSON.stringify(json));
	result = jsonpath({json: json, path: '$..[?(@.id == "' + id + '")].' + columnName + ''});
	console.log(columnName + ": " + result);
	return result;
}
module.exports = {
    readTestdataJson: readTestdataJson,
    readSqldataJson: readSqldataJson
};
