import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/conexion";
import { Producto } from "./Producto";
import { Venta } from "./Venta";

class DetalleVenta extends Model {
  otherPublicField;
}

DetalleVenta.init(
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
    ventaId: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    sequelize,
    createdAt: false,
    updatedAt: false,
    tableName: 'DetalleVentas'
  }
);

DetalleVenta.belongsTo(Producto, { foreignKey: "productoId" });
DetalleVenta.belongsTo(Venta, { foreignKey: "ventaId" });

export { DetalleVenta };
