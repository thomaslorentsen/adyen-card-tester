var apiKey = process.env.ADYEN_KEY;

var express = require('express'),
    app = express();

var exphbs = require('express-handlebars')
app.engine('.hbs', exphbs({defaultLayout: 'single', extname: '.hbs'}))
app.set('view engine', '.hbs')

var path = require('path');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res) {
    res.render('index', { apiKey: apiKey })
});

app.listen(5000);
