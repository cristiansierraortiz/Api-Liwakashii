"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _productos = _interopRequireDefault(require("../controllers/productos.controller"));

var routerProductos = (0, _express.Router)();
routerUsuarios.get("api/productos", function (req, res) {
  return res.send("loros");
});
var _default = routerProductos;
exports["default"] = _default;