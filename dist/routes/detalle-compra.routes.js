"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _detalleVenta = _interopRequireDefault(require("../controllers/detalle-venta.controller"));

var routerDetalleVenta = (0, _express.Router)();
routerDetalleVenta.get("/api/detalle-venta", function (req, res) {
  return res.send("loros");
});
var _default = routerDetalleVenta;
exports["default"] = _default;