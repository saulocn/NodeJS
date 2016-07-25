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

var salvarProdutos = function(req, res){
    var produto = req.body;
    
    var validadorTitulo = req.assert('titulo', 'O título é obrigatório!').notEmpty();
    req.assert('preco', 'Formato inválido').isFloat();
    

    var erros = req.validationErrors();




    if(erros){
        
        res.format({
            html:function(){ 
                res.render('produtos/form', {errosValidacao:erros, produto:produto});
            },
            json: function(){
                res.json(erros);
            }
        });
        return;
    }



    var connection = app.infra.connectionFactory();
    var produtosDAO = new app.infra.ProdutosDAO(connection);
    produtosDAO.salva(produto, function(erros, resultado){
        res.redirect('/produtos');
    });
}



app.get('/produtos', function(req, res) {
    var connection = app.infra.connectionFactory();
    var produtosDAO = new app.infra.ProdutosDAO(connection);
    produtosDAO.lista( function(err, results) {
        res.format({
            html:function(){ 
                res.render("produtos/lista", {
                    lista: results
                });

            },
            json: function(){
                res.json(results);
            }
        });

    });
    connection.end();
});

app.get('/produtos/detalhe', function(req, res) {
    var connection = app.infra.connectionFactory();
    var produtosDAO = app.infra.produtosBanco(connection);
    connection.end();
});

app.get('/produtos/form', function(req, res){
    res.render('produtos/form',{errosValidacao:{}, produto:{}});
});

app.post('/produtos/salva', salvarProdutos);


app.post('/produtos', salvarProdutos);
}
