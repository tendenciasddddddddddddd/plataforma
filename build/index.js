"use strict";

var _app = _interopRequireDefault(require("./app"));

require("./database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_app.default.listen(process.env.PORT || 3000);

console.log('escucha 300', 3000);
console.log('bien');