import { obtenerConexion, sql } from "../database/conexion";

export const obtenerUsuarios = async (req, res) => {
  try {
    const pool = await obtenerConexion();
    const resultado = await pool
      .request()
      .input("tabla", sql.VarChar, "Usuarios")
      .execute("sp_consultar_tabla");
    if (resultado.rowsAffected < 1) {
      res.status(404);
      res.json({ Mensaje: "No existen usuarios en la BD" });
    } else {
      res.status(200);
      res.json(resultado.recordsets[0]);
    }
  } catch (error) {
    res.status(500);
    res.json(error.message);
  }
};

export const obtenerUsuarioPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const pool = await obtenerConexion();
    const resultado = await pool
      .request()
      .input("id_usuario", sql.Int, id)
      .execute("sp_obtener_usuario_por_id");
    if (resultado.rowsAffected < 1) {
      res.status(404);
      res.json({
        Mensaje: "No existe el usuario con id " + id + " en la BD",
      });
    } else {
      res.status(200);
      res.json(resultado.recordsets[0]);
    }
  } catch (error) {
    res.status(500);
    res.json(error.message);
  }
};

export const crearUsuario = async (req, res) => {
  const {
    cedula_usuario,
    nombre_usuario,
    correo_usuario,
    contrasena_usuario,
    estado_usuario,
  } = req.body;
  if (
    cedula_usuario == null ||
    nombre_usuario == null ||
    correo_usuario == null ||
    contrasena_usuario == null ||
    estado_usuario == null
  ) {
    res.status(400);
    res.json({ Mensaje: "Los campos no pueden estar vacíos" });
  } else {
    const pool = await obtenerConexion();
    const resultado = await pool
      .request()
      .input("cedula_usuario", sql.Int, cedula_usuario)
      .execute("sp_validar_cedula_usuario");
    if (resultado.rowsAffected > 0) {
      res.status(400);
      res.json({
        Mensaje:
          "La cedula con número " + cedula_usuario + " ya existe en la BD",
      });
    } else {
      const pool = await obtenerConexion();
      const resultado = await pool
        .request()
        .input("correo_usuario", sql.VarChar(50), correo_usuario)
        .execute("sp_validar_correo_usuario");
      if (resultado.rowsAffected > 0) {
        res.status(400);
        res.json({
          Mensaje: "El correo " + correo_usuario + " ya existe en la BD",
        });
      } else {
        try {
          const pool = await obtenerConexion();
          const resultado = await pool
            .request()
            .input("cedula_usuario", sql.Int, cedula_usuario)
            .input("nombre_usuario", sql.VarChar(50), nombre_usuario)
            .input("correo_usuario", sql.VarChar(50), correo_usuario)
            .input("contrasena_usuario", sql.VarChar(250), contrasena_usuario)
            .input("estado_usuario", sql.Bit, estado_usuario)
            .execute("sp_crear_usuario");
          if (resultado.rowsAffected > 0) {
            res.status(200);
            res.json({
              Resultado: "Usuario registrado correctamente",
              Resgistro: {
                cedula_usuario,
                nombre_usuario,
                correo_usuario,
                contrasena_usuario,
                estado_usuario,
              },
            });
          } else {
            res.status(400);
            res.json({ Mensaje: "El registro no se pudo realizar" });
          }
        } catch (error) {
          res.status(500);
          res.json(error.message);
        }
      }
    }
  }
};

export const editarUsuarioPorId = async (req, res) => {
  const { id } = req.params;
  const { correo_usuario, contrasena_usuario } = req.body;
  if (correo_usuario == null || contrasena_usuario == null) {
    res.status(400);
    res.json({ Mensaje: "Los campos no pueden estar vacíos" });
  } else {
    try {
      const pool = await obtenerConexion();
      const resultado = await pool
        .request()
        .input("id_usuario", sql.Int, id)
        .execute("sp_obtener_usuario_por_id");
      if (resultado.rowsAffected < 1) {
        res.status(404);
        res.json({
          Mensaje: "No existe el usuario con id " + id + " en la BD",
        });
      } else {
        const pool = await obtenerConexion();
        const nombre = await pool
          .request()
          .input("id_usuario", sql.Int, id)
          .execute("sp_obtener_nombre_usuario_por_id");
        const nombre_usuario = nombre.recordset[0].nombre_usuario;
        const resultado = await pool
          .request()
          .input("id_usuario", sql.Int, id)
          .input("correo_usuario", sql.VarChar(50), correo_usuario)
          .input("contrasena_usuario", sql.VarChar(250), contrasena_usuario)
          .execute("sp_editar_usuario");
        if (resultado.rowsAffected > 0) {
          res.status(200);
          res.json({
            Resultado: "Usuario actualizado correctamente",
            Resgistro: {
              id,
              nombre_usuario,
              correo_usuario,
              contrasena_usuario,
            },
          });
        } else {
          res.status(400);
          res.json({ Mensaje: "La actualización ha fallado" });
        }
      }
    } catch (error) {
      res.status(500);
      res.json(error.message);
    }
  }
};

export const editarUsuarioPorIdModificado = async (req, res) => {
  const { id } = req.params;
  const { nombre_usuario_editar, estado_usuario } = req.body;
  if (nombre_usuario_editar == null || estado_usuario == null) {
    res.status(400);
    res.json({ Mensaje: "Los campos no pueden estar vacíos" });
  } else {
    try {
      const pool = await obtenerConexion();
      const resultado = await pool
        .request()
        .input("id_usuario", sql.Int, id)
        .execute("sp_obtener_usuario_por_id");
      if (resultado.rowsAffected < 1) {
        res.status(404);
        res.json({
          Mensaje: "No existe el usuario con id " + id + " en la BD",
        });
      } else {
        const pool = await obtenerConexion();
        const resultado = await pool
          .request()
          .input("id_usuario", sql.Int, id)
          .input("nombre_usuario", sql.VarChar(50), nombre_usuario_editar)
          .input("estado_usuario", sql.Bit, estado_usuario)
          .execute("sp_editar_usuario_nombre");
        if (resultado.rowsAffected > 0) {
          res.status(200);
          res.json({
            Resultado: "Usuario actualizado correctamente",
            Resgistro: {
              id,
              nombre_usuario_editar,
            },
          });
        } else {
          res.status(400);
          res.json({ Mensaje: "La actualización ha fallado" });
        }
      }
    } catch (error) {
      res.status(500);
      res.json(error.message);
    }
  }
};

export const eliminarUsuarioPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const pool = await obtenerConexion();
    const resultado = await pool
      .request()
      .input("id_usuario", sql.Int, id)
      .execute("sp_obtener_usuario_por_id");
    if (resultado.rowsAffected < 1) {
      res.status(404);
      res.json({
        Resultado: "No Encontrado",
        Mensaje: "No existe el usuario con id " + id + " en la BD",
      });
    } else {
      const pool = await obtenerConexion();
      const resultado = await pool
        .request()
        .input("id_usuario", sql.Int, id)
        .execute("sp_eliminar_usuario");
      if (resultado.rowsAffected > 0) {
        res.status(200);
        res.json({
          Resultado: "Usuario con id " + id + " eliminado correctamente",
        });
      } else {
        res.status(400);
        res.json({ Mensaje: "No se pudo eliminar el usuario con id " + id });
      }
    }
  } catch (error) {
    res.status(500);
    res.json(error.message);
  }
};

export const validarLogin = async (req, res) => {
  const { usuario, password } = req.body;
  if (usuario == null || password == null) {
    res.status(400);
    res.json({ Mensaje: "Los campos no pueden estar vacíos" });
  } else {
    try {
      const pool = await obtenerConexion();
      const resultado = await pool
        .request()
        .input("cedula_usuario", sql.Int, usuario)
        .query("select 1 from Usuarios where cedula_usuario = @cedula_usuario");
      if (resultado.rowsAffected < 1) {
        res.status(404);
        res.json({
          Mensaje:
            "No existe el usuario con numero de cedula " +
            usuario +
            " en la BD",
        });
      } else {
        const pool = await obtenerConexion();
        const resultado = await pool
          .request()
          .input("contrasena_usuario", sql.VarChar, password)
          .query(
            "select 1 from Usuarios where contrasena_usuario = @contrasena_usuario"
          );
        if (resultado.rowsAffected < 1) {
          res.status(400);
          res.json({ Mensaje: "La contraseña no es válida" });
        } else {
          res.status(200);
          res.json({
            Resultado: "Usuario validado correctamente",
          });
        }
      }
    } catch (error) {
      res.status(500);
      res.json(error.message);
    }
  }
};

export const obtenerNombrePorcedula = async (req, res) => {
  const { id } = req.params;
  try {
    const pool = await obtenerConexion();
    const resultado = await pool
      .request()
      .input("cedula_usuario", sql.Int, id)
      .query(
        "select nombre_usuario from Usuarios where cedula_usuario = @cedula_usuario"
      );
    if (resultado.rowsAffected < 1) {
      res.status(400);
      res.json({ Resultado: "No se encontro usuario con cedula " + id });
    } else {
      res.status(200);
      res.json(resultado.recordsets[0]);
    }
  } catch (error) {
    res.status(500);
    res.json(error.message);
  }
};
