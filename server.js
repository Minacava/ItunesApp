//Install express server
const express = require('express');
const path = require('path');
const app = express();
const port = 8080;
// Serve only the static files form the dist directory

app.use(express.static(path.join(__dirname, '/dist/testAppMarina/')));
app.listen(port);
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/testAppMarina/"));
});

