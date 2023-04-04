import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/conexion";
import { Producto } from "./Producto";
import { Compra } from "./Compra";

class DetalleCompra extends Model {
  otherPublicField;
}

DetalleCompra.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    productoId: { type: DataTypes.INTEGER, allowNull: false },
    cantidad: { type: DataTypes.INTEGER, allowNull: false },
    precioUnitario: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    descuento: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: 0,
    },
    precioTotal: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    compraId: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    sequelize,
    createdAt: false,
    updatedAt: false,
    tableName: 'DetalleCompras'
  }
);

DetalleCompra.belongsTo(Producto, { foreignKey: "productoId" });
DetalleCompra.belongsTo(Compra, { foreignKey: "compraId" });

export { DetalleCompra };
