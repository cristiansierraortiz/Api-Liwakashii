import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/conexion";
import { Usuario } from "./Usuario";
import { Producto } from "./Producto";

class Inventario extends Model {
  otherPublicField;
}

Inventario.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    stock: { type: DataTypes.STRING, allowNull: false },
    antiguedad: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date().toLocaleString(),
    },
    productoId: { type: DataTypes.INTEGER, allowNull: false },
    usuarioId: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    sequelize,
    createdAt: false,
    updatedAt: false,
    tableName: 'Inventarios'
  }
);

Inventario.belongsTo(Producto, { foreignKey: "productoId" });
Inventario.belongsTo(Usuario, { foreignKey: "usuarioId" });

export { Inventario };
