//var express = require('express');
//var configura = require('./config/express');
//var app = configura();
//app.set('view engine','ejs');
var app = require('./config/express')();
//var rotasProdutos = require('./app/routes/produtos')(app);

//app.get('/produtos', function(req, res) {
    //res.send("<html><body><h1>Listando os Produtos</h1></body></html>");
    //console.log("Atendendo a req");
    //res.render("produtos/lista")
//});

app.listen(3000, function() {
    console.log("Servidor rodaaaando...");
});
