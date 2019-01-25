'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

//Define request response in root URL (/)
app.get('/', function (req, res) {
  var _a$b$c = { a: 1, b: 2, c: 3 },
      a = _a$b$c.a,
      b = _a$b$c.b,
      c = _a$b$c.c;

  console.log(a);
  res.send('Hello World!');
});

//Launch listening server on port 8081
app.listen(3000, function () {
  console.log('app listening on port 3000!');
});