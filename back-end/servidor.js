// app.js
const mysql = require('mysql');
const express = require('express');

const app = express();         
const bodyParser = require('body-parser');
const port = 3000; //porta padrão

//configurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//definindo as rotas
const router = express.Router();
app.use('/', router);

//inicia o servidor
app.listen(port);

function execSQLQuery(sqlQry, res){

  const connection = mysql.createConnection({
    host     : 'database-1.ct5n0pdvt6yl.us-east-1.rds.amazonaws.com',
    port     : 3306,
    user     : 'admin',
    password : 'admin1234',
    database : 'proj_integrador'
  });

  connection.connect((err) => {
    if (err) {
      console.log('Erro connecting to database...', err)
      return
    }

    console.log('Connection established!')

    connection.query(sqlQry, function(error, results, fields){
      if (error) {
        res.json(error);
      } else {
        res.json(results);
      }
        
      connection.end();
    });
  });
}

router.get('/usuarios', (req, res) =>{
  execSQLQuery('SELECT * FROM usuario', res);
});
