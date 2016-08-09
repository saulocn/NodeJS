//var express = require('express');
//var configura = require('./config/express');
//var app = configura();
//app.set('view engine','ejs');
var app = require('./config/express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.set('io', io);

//var rotasProdutos = require('./app/routes/produtos')(app);

//app.get('/produtos', function(req, res) {
    //res.send("<html><body><h1>Listando os Produtos</h1></body></html>");
    //console.log("Atendendo a req");
    //res.render("produtos/lista")
//});




var porta = process.env.PORT || 3000;
var server = http.listen(porta, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Server de app escutando em http://%s:%s', host, port);
});

