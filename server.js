// importar
var express = require('express');
 
// instanciar
var app = express();
 
// ruteo
app.get('/', function(req, res){
  res.sendfile(__dirname + '/public/index.html');
});
app.get('/about', function(req, res){
  //res.sendfile(__dirname + '/public/about.html');
  res.send(req.acceptsLanguage('es') ? 'yes' : 'no');
});
 
// escuchar
app.listen(6000);
 
console.log("Servidor Express escuchando en modo %s", app.settings.env);