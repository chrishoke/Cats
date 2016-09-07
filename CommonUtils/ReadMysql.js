var mysql = require('D:/TESTING/Protractor/npm-3.10.6/bin/node_modules/mysql');
function createConnection(){
	var connection = mysql.createConnection({
			host     : 'localhost',
			port     : '3306',
			user     : 'root',
			password : 'admin',
			database : 'fsm'
			});	
	connection.connect();
	return connection;
}

function executeQuery(connection, sqlString, callback){
		connection.query(sqlString, function(err, rows, fields){
			if (err) {
				console.error('Error executing query: ' + err.stack);
			} 
			callback(rows);
		});
}

function disconnectSql(connection){
	this.sqldisconnect = connection.end();
	deferred.fulfill();
	return deferred.promise;
}

module.exports = {
		executeQuery: executeQuery,
		disconnectSql: disconnectSql,
		createConnection: createConnection
};
