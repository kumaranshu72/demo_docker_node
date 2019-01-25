'use strict'
import express from 'express'

var app = express()



//Define request response in root URL (/)
app.get('/', (req, res) => {
  var {a, b, c} = {a: 1, b: 2, c: 3};
  console.log(a);
  res.send('Hello World!')
})

//Launch listening server on port 8081
app.listen(3000, function () {
  console.log('app listening on port 3000!')
})
