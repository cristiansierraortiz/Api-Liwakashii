import { EstadoUsuario } from "../models/Estadousuario";
import { RolUsuario } from "../models/RolUsuario";
import { Usuario } from "../models/Usuario";

const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll({
      include: [
        {
          model: RolUsuario,
        },
        { model: EstadoUsuario },
      ],
    });

    res.status(200);
    res.json({ resultados: usuarios });
  } catch (error) {
    res.status(500);
    res.json(error.message);
  }
};

export { obtenerUsuarios };
