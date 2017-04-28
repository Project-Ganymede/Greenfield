/*
This is our main server file.
*/

const express = require('express');
// <PUT Database DEFINITION HERE>

// Middleware
const parser = require('body-parser');
const path = require('path');
const app = express();

// Parse JSON Data
app.use(parser.json());

/*
Placeholder for router
 */
 app.set('view engine', 'html');



  // Serve our client files and node modules.
  app.use(express.static(__dirname + '/../client'));
  app.use(express.static(__dirname + '/../node_modules'));

app.get('/*', (req, res) => {
  res.status(200).sendFile(path.join(__dirname + '/../client/app/layout/index.html'));
});

// Sets the port to either the Process Environment's or 3000.
let port = process.env.PORT || 3000;

// Run the Server and console.log the port
if(!module.parent) {
  app.listen(port);
  console.log('Listening on:', port);
}

module.exports = app;
