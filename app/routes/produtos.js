//var dbConnection = require('../infra/connectionFactory');

module.exports = function(app) {
    //app.get('/produtos', function(req, res) {
        //var connection = app.infra.connectionFactory();
        //var produtosBanco = new app.infra.ProdutosDAO(connection);
        //connection.query('select * from livros',
        //produtosBanco.lista( function(err, results) {
            //res.send(result);
            //res.render("produtos/lista", {
                //lista: results
            //});
        //});
        //connection.end();
        //res.render("produtos/lista")
    //});

    app.get('/produtos', function(req, res) {
        var connection = app.infra.connectionFactory();
        var produtosBanco = new app.infra.ProdutosDAO(connection);
        produtosBanco.lista( function(err, results) {
            res.render("produtos/lista", {
                lista: results
            });
        });
        connection.end();
    });

    app.get('/produtos/detalhe', function(req, res) {

        var connection = app.infra.connectionFactory();
        var produtosBanco = app.infra.produtosBanco(connection);
        connection.end();
    });
}
