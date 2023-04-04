import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/conexion";

class EstadoUsuario extends Model {
  otherPublicField;
}

EstadoUsuario.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    tipo: { type: DataTypes.CHAR, required: true },
    descripcion: { type: DataTypes.STRING, required: true },
  },
  {
    sequelize,
    createdAt: false,
    updatedAt: false,
    tableName: 'EstadoUsuarios'
  }
);

export { EstadoUsuario };
