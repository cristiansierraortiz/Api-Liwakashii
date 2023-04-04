import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/conexion";

class CategoriaProducto extends Model {
  otherPublicField;
}

CategoriaProducto.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING, required: true },
    descripcion: { type: DataTypes.STRING, required: true },
  },
  {
    sequelize,
    createdAt: false,
    updatedAt: false,
    tableName: 'CategoriaProductos'
  }
);

export { CategoriaProducto };
