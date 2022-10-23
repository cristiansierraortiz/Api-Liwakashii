"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _usuarios = require("../controllers/usuarios.controller");

var routerUsuarios = (0, _express.Router)();
routerUsuarios.get("/api/usuarios", _usuarios.obtenerUsuarios);
routerUsuarios.post("/api/usuarios", _usuarios.crearUsuario);
routerUsuarios.post("/api/usuarios/login", _usuarios.validarLogin);
routerUsuarios.get("/api/usuarios/nombre/:id", _usuarios.obtenerNombrePorcedula);
routerUsuarios.get("/api/usuarios/:id", _usuarios.obtenerUsuarioPorId);
routerUsuarios.put("/api/usuarios/:id", _usuarios.editarUsuarioPorId);
routerUsuarios["delete"]("/api/usuarios/:id", _usuarios.eliminarUsuarioPorId);
var _default = routerUsuarios;
exports["default"] = _default;