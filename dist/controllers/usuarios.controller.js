"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validarLogin = exports.obtenerUsuarios = exports.obtenerUsuarioPorId = exports.obtenerNombrePorcedula = exports.eliminarUsuarioPorId = exports.editarUsuarioPorId = exports.crearUsuario = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _conexion = require("../database/conexion");

var obtenerUsuarios = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var pool, resultado;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _conexion.obtenerConexion)();

          case 3:
            pool = _context.sent;
            _context.next = 6;
            return pool.request().input("tabla", _conexion.sql.VarChar, "Usuarios").execute("sp_consultar_tabla");

          case 6:
            resultado = _context.sent;

            if (resultado.rowsAffected < 1) {
              res.status(404);
              res.json({
                Mensaje: "No existen usuarios en la BD"
              });
            } else {
              res.status(200);
              res.json(resultado.recordsets[0]);
            }

            _context.next = 14;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            res.status(500);
            res.json(_context.t0.message);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function obtenerUsuarios(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.obtenerUsuarios = obtenerUsuarios;

var obtenerUsuarioPorId = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, pool, resultado;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.prev = 1;
            _context2.next = 4;
            return (0, _conexion.obtenerConexion)();

          case 4:
            pool = _context2.sent;
            _context2.next = 7;
            return pool.request().input("id_usuario", _conexion.sql.Int, id).execute("sp_obtener_usuario_por_id");

          case 7:
            resultado = _context2.sent;

            if (resultado.rowsAffected < 1) {
              res.status(404);
              res.json({
                Mensaje: "No existe el usuario con id " + id + " en la BD"
              });
            } else {
              res.status(200);
              res.json(resultado.recordsets[0]);
            }

            _context2.next = 15;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](1);
            res.status(500);
            res.json(_context2.t0.message);

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 11]]);
  }));

  return function obtenerUsuarioPorId(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.obtenerUsuarioPorId = obtenerUsuarioPorId;

var crearUsuario = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body, cedula_usuario, nombre_usuario, correo_usuario, contrasena_usuario, pool, resultado, _pool, _resultado, _pool2, _resultado2;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, cedula_usuario = _req$body.cedula_usuario, nombre_usuario = _req$body.nombre_usuario, correo_usuario = _req$body.correo_usuario, contrasena_usuario = _req$body.contrasena_usuario;

            if (!(cedula_usuario == null || nombre_usuario == null || correo_usuario == null || contrasena_usuario == null)) {
              _context3.next = 6;
              break;
            }

            res.status(400);
            res.json({
              Mensaje: "Los campos no pueden estar vacíos"
            });
            _context3.next = 42;
            break;

          case 6:
            _context3.next = 8;
            return (0, _conexion.obtenerConexion)();

          case 8:
            pool = _context3.sent;
            _context3.next = 11;
            return pool.request().input("cedula_usuario", _conexion.sql.Int, cedula_usuario).execute("sp_validar_cedula_usuario");

          case 11:
            resultado = _context3.sent;

            if (!(resultado.rowsAffected > 0)) {
              _context3.next = 17;
              break;
            }

            res.status(400);
            res.json({
              Mensaje: "La cedula con número " + cedula_usuario + " ya existe en la BD"
            });
            _context3.next = 42;
            break;

          case 17:
            _context3.next = 19;
            return (0, _conexion.obtenerConexion)();

          case 19:
            _pool = _context3.sent;
            _context3.next = 22;
            return _pool.request().input("correo_usuario", _conexion.sql.VarChar(50), correo_usuario).execute("sp_validar_correo_usuario");

          case 22:
            _resultado = _context3.sent;

            if (!(_resultado.rowsAffected > 0)) {
              _context3.next = 28;
              break;
            }

            res.status(400);
            res.json({
              Mensaje: "El correo " + correo_usuario + " ya existe en la BD"
            });
            _context3.next = 42;
            break;

          case 28:
            _context3.prev = 28;
            _context3.next = 31;
            return (0, _conexion.obtenerConexion)();

          case 31:
            _pool2 = _context3.sent;
            _context3.next = 34;
            return _pool2.request().input("cedula_usuario", _conexion.sql.Int, cedula_usuario).input("nombre_usuario", _conexion.sql.VarChar(50), nombre_usuario).input("correo_usuario", _conexion.sql.VarChar(50), correo_usuario).input("contrasena_usuario", _conexion.sql.VarChar(250), contrasena_usuario).execute("sp_crear_usuario");

          case 34:
            _resultado2 = _context3.sent;

            if (_resultado2.rowsAffected > 0) {
              res.status(200);
              res.json({
                Resultado: "Usuario registrado correctamente",
                Resgistro: {
                  cedula_usuario: cedula_usuario,
                  nombre_usuario: nombre_usuario,
                  correo_usuario: correo_usuario,
                  contrasena_usuario: contrasena_usuario
                }
              });
            } else {
              res.status(400);
              res.json({
                Mensaje: "El registro no se pudo realizar"
              });
            }

            _context3.next = 42;
            break;

          case 38:
            _context3.prev = 38;
            _context3.t0 = _context3["catch"](28);
            res.status(500);
            res.json(_context3.t0.message);

          case 42:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[28, 38]]);
  }));

  return function crearUsuario(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.crearUsuario = crearUsuario;

var editarUsuarioPorId = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, _req$body2, correo_usuario, contrasena_usuario, pool, resultado, _pool3, nombre, nombre_usuario, _resultado3;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, correo_usuario = _req$body2.correo_usuario, contrasena_usuario = _req$body2.contrasena_usuario;

            if (!(correo_usuario == null || contrasena_usuario == null)) {
              _context4.next = 7;
              break;
            }

            res.status(400);
            res.json({
              Mensaje: "Los campos no pueden estar vacíos"
            });
            _context4.next = 36;
            break;

          case 7:
            _context4.prev = 7;
            _context4.next = 10;
            return (0, _conexion.obtenerConexion)();

          case 10:
            pool = _context4.sent;
            _context4.next = 13;
            return pool.request().input("id_usuario", _conexion.sql.Int, id).execute("sp_obtener_usuario_por_id");

          case 13:
            resultado = _context4.sent;

            if (!(resultado.rowsAffected < 1)) {
              _context4.next = 19;
              break;
            }

            res.status(404);
            res.json({
              Mensaje: "No existe el usuario con id " + id + " en la BD"
            });
            _context4.next = 30;
            break;

          case 19:
            _context4.next = 21;
            return (0, _conexion.obtenerConexion)();

          case 21:
            _pool3 = _context4.sent;
            _context4.next = 24;
            return _pool3.request().input("id_usuario", _conexion.sql.Int, id).execute("sp_obtener_nombre_usuario_por_id");

          case 24:
            nombre = _context4.sent;
            nombre_usuario = nombre.recordset[0].nombre_usuario;
            _context4.next = 28;
            return _pool3.request().input("id_usuario", _conexion.sql.Int, id).input("correo_usuario", _conexion.sql.VarChar(50), correo_usuario).input("contrasena_usuario", _conexion.sql.VarChar(250), contrasena_usuario).execute("sp_editar_usuario");

          case 28:
            _resultado3 = _context4.sent;

            if (_resultado3.rowsAffected > 0) {
              res.status(200);
              res.json({
                Resultado: "Usuario actualizado correctamente",
                Resgistro: {
                  id: id,
                  nombre_usuario: nombre_usuario,
                  correo_usuario: correo_usuario,
                  contrasena_usuario: contrasena_usuario
                }
              });
            } else {
              res.status(400);
              res.json({
                Mensaje: "La actualización ha fallado"
              });
            }

          case 30:
            _context4.next = 36;
            break;

          case 32:
            _context4.prev = 32;
            _context4.t0 = _context4["catch"](7);
            res.status(500);
            res.json(_context4.t0.message);

          case 36:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[7, 32]]);
  }));

  return function editarUsuarioPorId(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.editarUsuarioPorId = editarUsuarioPorId;

var eliminarUsuarioPorId = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, pool, resultado, _pool4, _resultado4;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _context5.prev = 1;
            _context5.next = 4;
            return (0, _conexion.obtenerConexion)();

          case 4:
            pool = _context5.sent;
            _context5.next = 7;
            return pool.request().input("id_usuario", _conexion.sql.Int, id).execute("sp_obtener_usuario_por_id");

          case 7:
            resultado = _context5.sent;

            if (!(resultado.rowsAffected < 1)) {
              _context5.next = 13;
              break;
            }

            res.status(404);
            res.json({
              Resultado: "No Encontrado",
              Mensaje: "No existe el usuario con id " + id + " en la BD"
            });
            _context5.next = 20;
            break;

          case 13:
            _context5.next = 15;
            return (0, _conexion.obtenerConexion)();

          case 15:
            _pool4 = _context5.sent;
            _context5.next = 18;
            return _pool4.request().input("id_usuario", _conexion.sql.Int, id).execute("sp_eliminar_usuario");

          case 18:
            _resultado4 = _context5.sent;

            if (_resultado4.rowsAffected > 0) {
              res.status(200);
              res.json({
                Resultado: "Usuario con id " + id + " eliminado correctamente"
              });
            } else {
              res.status(400);
              res.json({
                Mensaje: "No se pudo eliminar el usuario con id " + id
              });
            }

          case 20:
            _context5.next = 26;
            break;

          case 22:
            _context5.prev = 22;
            _context5.t0 = _context5["catch"](1);
            res.status(500);
            res.json(_context5.t0.message);

          case 26:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 22]]);
  }));

  return function eliminarUsuarioPorId(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.eliminarUsuarioPorId = eliminarUsuarioPorId;

var validarLogin = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var _req$body3, usuario, password, pool, resultado, _pool5, _resultado5;

    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _req$body3 = req.body, usuario = _req$body3.usuario, password = _req$body3.password;

            if (!(usuario == null || password == null)) {
              _context6.next = 6;
              break;
            }

            res.status(400);
            res.json({
              Mensaje: "Los campos no pueden estar vacíos"
            });
            _context6.next = 31;
            break;

          case 6:
            _context6.prev = 6;
            _context6.next = 9;
            return (0, _conexion.obtenerConexion)();

          case 9:
            pool = _context6.sent;
            _context6.next = 12;
            return pool.request().input("cedula_usuario", _conexion.sql.Int, usuario).query("select 1 from Usuarios where cedula_usuario = @cedula_usuario");

          case 12:
            resultado = _context6.sent;

            if (!(resultado.rowsAffected < 1)) {
              _context6.next = 18;
              break;
            }

            res.status(404);
            res.json({
              Mensaje: "No existe el usuario con numero de cedula " + usuario + " en la BD"
            });
            _context6.next = 25;
            break;

          case 18:
            _context6.next = 20;
            return (0, _conexion.obtenerConexion)();

          case 20:
            _pool5 = _context6.sent;
            _context6.next = 23;
            return _pool5.request().input("contrasena_usuario", _conexion.sql.VarChar, password).query("select 1 from Usuarios where contrasena_usuario = @contrasena_usuario");

          case 23:
            _resultado5 = _context6.sent;

            if (_resultado5.rowsAffected < 1) {
              res.status(400);
              res.json({
                Mensaje: "La contraseña no es válida"
              });
            } else {
              res.status(200);
              res.json({
                Resultado: "Usuario validado correctamente"
              });
            }

          case 25:
            _context6.next = 31;
            break;

          case 27:
            _context6.prev = 27;
            _context6.t0 = _context6["catch"](6);
            res.status(500);
            res.json(_context6.t0.message);

          case 31:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[6, 27]]);
  }));

  return function validarLogin(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.validarLogin = validarLogin;

var obtenerNombrePorcedula = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var id, pool, resultado;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            id = req.params.id;
            _context7.prev = 1;
            _context7.next = 4;
            return (0, _conexion.obtenerConexion)();

          case 4:
            pool = _context7.sent;
            _context7.next = 7;
            return pool.request().input("cedula_usuario", _conexion.sql.Int, id).query("select nombre_usuario from Usuarios where cedula_usuario = @cedula_usuario");

          case 7:
            resultado = _context7.sent;

            if (resultado.rowsAffected < 1) {
              res.status(400);
              res.json({
                Resultado: "No se encontro usuario con cedula " + id
              });
            } else {
              res.status(200);
              res.json(resultado.recordsets[0]);
            }

            _context7.next = 15;
            break;

          case 11:
            _context7.prev = 11;
            _context7.t0 = _context7["catch"](1);
            res.status(500);
            res.json(_context7.t0.message);

          case 15:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[1, 11]]);
  }));

  return function obtenerNombrePorcedula(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.obtenerNombrePorcedula = obtenerNombrePorcedula;