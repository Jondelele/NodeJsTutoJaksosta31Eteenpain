var express = require('express');
// Kaikki mitä on todoController filun modude.exportin sisällä tallentuu nyt 
// todoController muuttujaan alla
var todoController = require('./controllers/todoController')

/* Set uppaa express appin */
var app = express();

// Set up template engine
app.set('view engine', 'ejs');

// Staattiset filut
app.use(express.static('./public'));

// Fire controllers
todoController(app);

// Listen to port
app.listen(3000);

console.log('You are listening to port 3000');
