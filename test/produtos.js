/*var http = require('http');
var assert = require('assert');*/
var express = require('../config/express')();
var request = require('supertest')(express);



describe('#ProdutosController', function(){
	process.env.NODE_ENV = 'test';

	beforeEach(function(done){
		var conn = express.infra.connectionFactory();
		conn.query('delete from livros', function(ex, result){
			if(!ex){
				done();
			} else {
				console.log(ex);
			}
		});
	});

	it('#Retorna lista em Json', function(done){
			//console.log('Teste de de verificação de listagem de Json');

			/*var configuracoes = {
				hostname : 'localhost',
				port : 3000,
				path:'/produtos',
				headers: {
					'Accept':'application/json'
				}
			};
			http.get(configuracoes,function(res){*/
				//console.log(res.statusCode);
				/*if(res.statusCode == 200){
					console.log("Status OK");
				}*/
				//console.log(res.headers['content-type']);
				/*if(res.headers['content-type'] == 'application/json; charset=utf-8'){
					console.log("Content-Type OK")
				}*/

				/*assert.equal(res.statusCode, 200);
				assert.equal(res.headers['content-type'],'application/json; charset=utf-8');
				
				// done = funcaoFinalizacao(); // Por se tratar de funções de CallBack, este objeto é necessário para indicar ao Mocha que o teste foi finalizado
				done();


			});*/


		request.get('/produtos')
		.set('Accept', 'application/json')
		.expect('Content-Type', /json/)
		.expect(200, done);

	});


	it('#Retorna lista em Html', function(done){
		request.get('/produtos')
		.set('Accept', 'text/html')
		.expect('Content-Type', /html/)
		.expect(200, done);

	});

	it('#Cadastro de Produto com dados inválidos', function(done){
		request.post('/produtos')
		.send({
			titulo:"",
			descricao:'novo livro'
		})
		.expect(400, done);

	});

	it('#Cadastro de Produto com dados válidos', function(done){
		request.post('/produtos')
		.send({
			titulo:"titulo novo",
			preco:40.5,
			descricao:'novo livro'
		})
		.expect(302, done); // Não é 200 devido ao redirect

	});



});


/*produtosController

listaJson

cadastro aceita Json

cadastro aceita urlencoded

*/