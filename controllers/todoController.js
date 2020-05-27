var bodyParser = require('body-parser');
var data =[
    {item: 'buy food'},
    {item: 'eat food'},
    {item: 'sleep'}
];
var urlencodedParser = bodyParser.urlencoded({extended: false});
module.exports = function(app){

app.get('/todo', function(req, res){
    res.render('todo', {todos: data})
});
app.post('/todo', urlencodedParser, (req, res) => {
    data.push(JSON.parse(JSON.stringify(req.body)));
    res.json(data);
  });
app.delete('/todo/:item', function(req, res){
    data = data.filter(function(todo){
        return todo.item.replace(/ /g, '-') !== req.params.item;
    });
    res.json(data);
});

};