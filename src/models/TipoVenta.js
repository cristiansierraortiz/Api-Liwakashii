import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/conexion";

class TipoVenta extends Model {
  otherPublicField;
}

TipoVenta.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING, required: true },
    descripcion: { type: DataTypes.STRING, required: true },
  },
  {
    sequelize,
    createdAt: false,
    updatedAt: false,
    tableName: 'TipoVentas'
  }
);

export { TipoVenta };
