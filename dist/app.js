"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _config = _interopRequireDefault(require("./config"));

var _usuarios = _interopRequireDefault(require("./routes/usuarios.routes"));

var _detalleVenta = _interopRequireDefault(require("./routes/detalle-venta.routes"));

var _cors = _interopRequireDefault(require("cors"));

var app = (0, _express["default"])();
app.use((0, _cors["default"])()); // configuracion servidor

app.set("port", _config["default"].PORT); //middlewares

app.use(_express["default"].json({
  type: "application/json"
}));
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(_usuarios["default"], _detalleVenta["default"]);
var _default = app;
exports["default"] = _default;