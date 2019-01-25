'use strict'
import express from 'express'

var app = express()
var router = express.Router()

var swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', router);

app.use('/', router)

router.get('/', function(req, res){
   console.log('hi');
   res.send('hello world!');
});

//Launch listening server on port 8081
app.listen(3000, function () {
  console.log('app listening on port 3000!')
})
