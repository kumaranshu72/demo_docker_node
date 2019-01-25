'use strict'
import express from 'express'

var app = express()
var router = express.Router()
const expressSwagger = require('express-swagger-generator')(app);

let options = {
    swaggerDefinition: {
        info: {
            description: 'This is a sample server',
            title: 'Swagger',
            version: '1.0.0',
        },
        host: 'localhost:3000',
        basePath: '/v1',
        produces: [
            "application/json",
            "application/xml"
        ],
        schemes: ['http', 'https'],
		securityDefinitions: {
            JWT: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization',
                description: "",
            }
        }
    },
    basedir: __dirname, //app absolute path
    files: ['*.js'] //Path to the API handle folder
};

expressSwagger(options)


var swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', router);

app.use('/', router)

/**
 * This function comment is parsed by Anshu
 * @route GET /
 * @group index - hello world to user
 * @operationId retrieveFooInfo
 * @produces application/json application/xml
 * @consumes application/json application/xml
 * @returns  200 - A hello world string
 */
router.get('/', function(req, res){
   console.log('hi');
   res.send('hello world!');
});

//Launch listening server on port 8081
app.listen(3000, function () {
  console.log('app listening on port 3000!')
})
