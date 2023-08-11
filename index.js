const mysql = require('mysql');

// Crea la conexión con la base de datos
const connection = mysql.createConnection({
    host: 'my-db', 
    user: 'root',
    password: 'my_password',
    database: 'my_database'
});

// Muestra los resultados en una página HTML
const http = require('http');

const server = http.createServer((req, res) => {
  connection.query('SELECT * FROM my_table', (error, results, fields) => {
    if (error) {
      console.error(error);
      res.statusCode = 500;
      res.end('Error al consultar la base de datos');
    } else {
      res.setHeader('Content-Type', 'text/html');
      res.statusCode = 200;
      res.write('<html><body><h1>Resultados de la consulta:</h1><ul>');
      results.forEach(result => {
        res.write(`<li>${result.name}: ${result.email}</li>`);
      });
      res.write('</ul></body></html>');
      res.end();
    }
  });
});

server.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
