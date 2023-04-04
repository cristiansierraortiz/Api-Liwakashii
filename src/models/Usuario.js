import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/conexion";
import { RolUsuario } from "./RolUsuario";
import { EstadoUsuario } from "./Estadousuario";

class Usuario extends Model {
  otherPublicField;
}

Usuario.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING, allowNull: false },
    correo: { type: DataTypes.STRING, allowNull: false },
    contrasena: { type: DataTypes.STRING, allowNull: false },
    creacion: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: Date.now().toLocaleString,
    },
    rolId: { type: DataTypes.INTEGER, allowNull: false },
    estadoId: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    sequelize,
    createdAt: false,
    updatedAt: false,
    tableName: 'Usuarios'
  }
);

Usuario.belongsTo(RolUsuario, { foreignKey: "rolId" });
Usuario.belongsTo(EstadoUsuario, { foreignKey: "estadoId" });

export { Usuario };
