let express = require('express');
let app = express();
let handlebars = require('express-handlebars')
	.create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname+'/views/images'));

app.get('/',function(req,res){
    res.render('gameArea')
});

app.get('/face',function(req,res){

    res.render('face')
});

app.listen(app.get('port'), function(){
    console.log( 'Express started on http://localhost:' +
      app.get('port') + '; press Ctrl-C to terminate.' );
  });