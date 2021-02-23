const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql =require('mysql')
const connection = mysql.createConnection(config)

const sql = 'INSERT INTO pessoas(name) values ("João")'

connection.query(sql)

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function(req, res) {
    var sql='SELECT name FROM pessoas'
    connection.query(sql, function (err, data, fields) {
    if (err) throw err
    res.render('index.ejs', {pessoas: data})
    connection.end
  });
});

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})