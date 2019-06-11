var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {

  /* Tentando colocar os dados do json no site - mas só consigo 1 */
  fs.readFile("./characters.json", "utf-8", function(err, data){
    if(err){
      return console.log("Erro ao ler arquivo");
    }
    var json_data = JSON.parse( data );
    for ( var i in json_data ){
      if (json_data[i].status === 'Alive') {
        res.render('index', { 
                            title: 'Personagens',
                            image: json_data[i].image, 
                            name: json_data[i].name,
                            location: json_data[i].location.name,
                            gender: (json_data[i].gender === 'Male' ? 'Masculino': 'Feminino'),
                            episode: (json_data[i].episode.length),
                            status: (json_data[i].status === 'Alive' ? 'Vivo': 'Morto')
                            }
                  );
      }
    }
  });
});


module.exports = router;
