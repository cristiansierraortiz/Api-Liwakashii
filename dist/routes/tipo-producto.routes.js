"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _tipoProducto = _interopRequireDefault(require("../controllers/tipo-producto.controller"));

var routerTipoProducto = (0, _express.Router)();
routerUsuarios.get("api/tipo-producto", function (req, res) {
  return res.send("loros");
});
var _default = routerTipoProducto;
exports["default"] = _default;