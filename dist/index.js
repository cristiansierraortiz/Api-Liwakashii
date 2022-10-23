"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _app = _interopRequireDefault(require("./app"));

_app["default"].listen(_app["default"].get('port'), function () {
  console.log('servidor iniciado en el puerto', _app["default"].get('port'));
});

var _default = _app["default"];
exports["default"] = _default;