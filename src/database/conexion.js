import sql from "mssql";
import config from "../config";

const sqlConfig = {
  user: config.DB_USER,
  password: config.DB_PWD,
  database: config.DB_NAME,
  server: config.DB_HOST,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

export async function obtenerConexion() {
  try {
    let pool = await sql.connect(sqlConfig);
    return pool;
  } catch (error) {
    console.error(error);
  }
}

export async function validarConexion() {
  let pool = await obtenerConexion();
  let resultado = await pool.request().query("select 1");
  if (resultado != null) console.log("conectado a la BD");
  else console.log("no se pudo conectar a la BD");
}

validarConexion();

export {sql}
