import jwt from "jwt-simple";
import moment from "moment";
import config from "../config";

const secret = config.SECRET_JWT;

const auth = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).send({ message: "NoHeadersError" });
  }

  var token = req.headers.authorization.replace(/['"]+/g, "");
  var segment = token.split(".");

  if (segment.length != 3) {
    return res.status(403).send({ message: "InvalidToken" });
  } else {
    try {
      var payload = jwt.decode(token, secret);
      if (payload.exp <= moment().unix()) {
        return res.status(403).send({ message: "TokenExpired" });
      }
    } catch (error) {
      return res.status(403).send({ message: "InvalidToken" });
    }
  }

  req.user = payload;

  next();
};

export { auth };
