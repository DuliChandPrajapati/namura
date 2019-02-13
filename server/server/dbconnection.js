var mysql      = require('mysql');
const config = require('config');

var connection = mysql.createConnection({
    host     : config.mysqlHost,
    user     : config.mysqlUsername,
    password : config.mysqlPassword,
    database : config.mysqlDatabase,
    //port: 3307
});

connection.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
    }
    console.log('Connected as id ' + connection.threadId);
});

module.exports = connection;