var path = require('path'),
    express = require('express'),
    app = express(),
    staticPath = path.normalize(__dirname),
    server = app.listen(8080);

app.use(express.static(staticPath));