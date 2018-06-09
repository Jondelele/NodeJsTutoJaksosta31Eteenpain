var bodyParser = require('body-parser');

var data = [{item: 'get milk'}, {item: 'walk doggotin'}, {item: 'kick some coding ass'}];
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

    app.get('/todo', function(req, res) {
        res.render('todo', {todos: data});
    });

    app.post('/todo', urlencodedParser, function(req, res){
        data.push(req.body);
        res.json(data);
    });

    app.delete('/todo/:item', function(req, res) {
        console.log(req.params.item);
        
        // Filter on hauska metodi jonka avulla voi filteröidä nopeasti
        // ja helposti kaikki arrayn alkiot ja poistaa ne arraysta jos
        // kyseinen funktio palauttaa false.
        data = data.filter(function(todo) {
            // .replace() laittaa kaikkien välien tilalle hyphenin koska vain sitten
            // sanoja kyetään vertailemaan koska selain palauttaa poistettavan sanan
            // myös hyphenin kanssa.
            return todo.item.replace(/ /g, '-') !== req.params.item;
        });
        res.json(data);
    });
};