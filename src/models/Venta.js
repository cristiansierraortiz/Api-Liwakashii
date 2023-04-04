import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/conexion";
import { TipoVenta } from "./TipoVenta";
import { Usuario } from "./Usuario";

class Venta extends Model {
  otherPublicField;
}

Venta.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    tipoVentaId: { type: DataTypes.INTEGER, allowNull: false },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date().toLocaleString(),
    },
    cantidadTotalProductos: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    valorTotal: { type: DataTypes.DECIMAL(10, 2), allowNull: false, defaultValue: 0 },
    usuarioId: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    sequelize,
    createdAt: false,
    updatedAt: false,
    tableName: 'Ventas'
  }
);

Venta.belongsTo(TipoVenta, { foreignKey: "tipoVentaId" });
Venta.belongsTo(Usuario, { foreignKey: "usuarioId" });

export { Venta };
