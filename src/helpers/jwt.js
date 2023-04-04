import jwt from "jwt-simple";
import moment from "moment";
import config from "../config";

const secret = config.SECRET_JWT;

exports.createToken = (usuario) => {
  let payload = {
    sub: usuario.id,
    nombres: usuario.nombre,
    email: usuario.correo,
    rol: usuario.RolUsuario.tipo,
    iat: moment().unix(),
    exp: moment().add(7, "days").unix(),
  };

  return jwt.encode(payload, secret);
};
