var express = require('express');
var app = express();

var path = require('path');

require('./router/main')(app);
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, 'public')));

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("UI is now running at http://localhost:%s/", port)

})





