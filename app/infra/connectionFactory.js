var mysql = require('mysql');
function createDBConnection() {

	if(!process.env.NODE_ENV){
		return mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: '',
			database: 'casadocodigo'
		});
	} 
	if(process.env.NODE_ENV == 'test'){
		return mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: '',
			database: 'casadocodigo_test'
		});
	}

	/*if(process.env.NODE_ENV == 'production'){
		var url = process.env.CLEARDB_DATABASE_URL;
		var grupos = url.match(/ /);
		return mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: '',
			database: 'casadocodigo_test'
		});
	}*/
}

module.exports = function(){
	return createDBConnection;
}
