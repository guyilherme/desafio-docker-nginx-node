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

// app.get('/', (req,res) => {
//     res.send('<h1>Full Cycle Rocks!</h1>')
// })

app.get('/', function(req, res) {
    var sql='SELECT name FROM pessoas'
    connection.query(sql, function (err, data, fields) {
    if (err) throw err
    res.send(data)
    connection.end
  });
});

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})