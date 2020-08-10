var express = require('express'),
    app = express();

var testRoutes = require('./route/clientes');

// Import my test routes into the path '/test'
app.use('/clientes', testRoutes);