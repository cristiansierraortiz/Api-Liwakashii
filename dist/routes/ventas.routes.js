"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _ventas = _interopRequireDefault(require("../controllers/ventas.controller"));

var routerVentas = (0, _express.Router)();
routerUsuarios.get("api/ventas", function (req, res) {
  return res.send("loros");
});
var _default = routerVentas;
exports["default"] = _default;