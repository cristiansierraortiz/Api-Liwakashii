import { sequelize } from "../../database/conexion";

async function sincronizarModelos() {
  sequelize
    .sync()
    .then(() => {
      console.log("Todos los modelos se han sincronizado correctamente");
    })
    .catch((error) => {
      console.log("Error al sincronizar los modelos:", error);
    });
}

export { sincronizarModelos };
