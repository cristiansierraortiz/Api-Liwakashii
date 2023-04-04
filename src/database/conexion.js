import Sequelize from 'sequelize';
import config from '../config';

const sequelize = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PWD, {
  host: config.DB_HOST,
  dialect: 'mssql'
});

export async function validarConexionSQL () {
  try {
    await sequelize.authenticate();
    console.log('Conexión exitosa a la BD Liwakashii');
  } catch (error) {
    console.error('Al intentar conectar ala BD, se presento el error:', error);
  }
}

validarConexionSQL();

export {sequelize}