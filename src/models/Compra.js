import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/conexion";
import { Usuario } from "./Usuario";

class Compra extends Model {
  otherPublicField;
}

Compra.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date().toLocaleString(),
    },
    cantidadTotalProductos: { type: DataTypes.INTEGER, allowNull: false },
    valorTotal: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    usuarioId: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    sequelize,
    createdAt: false,
    updatedAt: false,
    tableName: 'Compras'
  }
);

Compra.belongsTo(Usuario, { foreignKey: "usuarioId" });

export { Compra };
