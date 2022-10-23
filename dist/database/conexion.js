"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.obtenerConexion = obtenerConexion;
Object.defineProperty(exports, "sql", {
  enumerable: true,
  get: function get() {
    return _mssql["default"];
  }
});
exports.validarConexion = validarConexion;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mssql = _interopRequireDefault(require("mssql"));

var _config = _interopRequireDefault(require("../config"));

var sqlConfig = {
  user: _config["default"].DB_USER,
  password: _config["default"].DB_PWD,
  database: _config["default"].DB_NAME,
  server: _config["default"].DB_HOST,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true,
    // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs

  }
};

function obtenerConexion() {
  return _obtenerConexion.apply(this, arguments);
}

function _obtenerConexion() {
  _obtenerConexion = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var pool;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _mssql["default"].connect(sqlConfig);

          case 3:
            pool = _context.sent;
            return _context.abrupt("return", pool);

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _obtenerConexion.apply(this, arguments);
}

function validarConexion() {
  return _validarConexion.apply(this, arguments);
}

function _validarConexion() {
  _validarConexion = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    var pool, resultado;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return obtenerConexion();

          case 2:
            pool = _context2.sent;
            _context2.next = 5;
            return pool.request().query("select 1");

          case 5:
            resultado = _context2.sent;
            if (resultado != null) console.log("conectado a la BD");else console.log("no se pudo conectar a la BD");

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _validarConexion.apply(this, arguments);
}

validarConexion();