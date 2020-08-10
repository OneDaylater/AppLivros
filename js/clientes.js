var express = require('express'),
    router = express.Router();

var automatedRoutes = require('./testRoutes/automated');

router
  // Add a binding to handle '/test'
  .get('/', function(){
    // render the /tests view
  })

  // Import my automated routes into the path '/tests/automated'
  // This works because we're already within the '/tests' route so we're simply appending more routes to the '/tests' endpoint
  .use('/automated', automatedRoutes);

module.exports = router;