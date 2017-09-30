module.exports = function(app)
{
     app.get('/', function (req, res){
        res.render('chatbot.html')
    });

     app.get('/:name', function(req, res){
     	res.render(req.params.name)
     });

}