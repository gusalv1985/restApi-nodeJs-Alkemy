var express = require('express');
var cors = require('cors');
var app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());


app.use(function(req, res, next) { 
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST'); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
    next(); 
}); 

const registro =  require('./rutas');

app.use('/api/registro', registro);


var port = process.env.PORT || 5000
app.listen(port);
console.log("rest api funcionando en puerto: "+port)

