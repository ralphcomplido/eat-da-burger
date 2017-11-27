// Pull in required dependencies
var mysql = require('mysql');

// Create the MySQL connection object
var connection = mysql.createConnection({
		port: 3306 ,
		host: 'lgg2gx1ha7yp2w0k.cbetxkdyhwsb.us-east-1.rds.amazonaws.com' || 'localhost',
		user: 'exmkvei3vy56kpoc' || 'root',
		password: 'djaz0nvbprvpi8ry' || 'ralph123',
		database: 't0eda42kl7b7cpmp' || 'burgers_db'
	});

// Make the connection to MySQL
connection.connect(function(err) {
  if (err) {
    console.error('ERROR: MySQL connection error -- ' + err.stack + '\n\n');
    return;
  }
  console.log('Connected to MySQL database as id ' + connection.threadId + '\n\n');
});

// Export connection for ORM use
module.exports = connection;
