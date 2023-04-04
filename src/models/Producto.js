import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/conexion";
import { CategoriaProducto } from "../models/CategoriaProducto";

class Producto extends Model {
  otherPublicField;
}

Producto.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING, allowNull: false },
    descripcion: { type: DataTypes.STRING, allowNull: false },
    precio: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    categoriaId: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    sequelize,
    createdAt: false,
    updatedAt: false,
    tableName: 'Productos'
  }
);

Producto.belongsTo(CategoriaProducto, { foreignKey: "categoriaId" });

export { Producto };
