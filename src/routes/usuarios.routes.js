import { Router } from "express";
const routerUsuarios = Router();
import {
  crearUsuario,
  editarUsuarioPorId,
  editarUsuarioPorIdModificado,
  eliminarUsuarioPorId,
  obtenerNombrePorcedula,
  obtenerUsuarioPorId,
  obtenerUsuarios,
  validarLogin,
} from "../controllers/usuarios.controller";

routerUsuarios.get("/api/usuarios", obtenerUsuarios);

routerUsuarios.post("/api/usuarios", crearUsuario);

routerUsuarios.post("/api/usuarios/login", validarLogin);

routerUsuarios.get("/api/usuarios/nombre/:id", obtenerNombrePorcedula);

routerUsuarios.get("/api/usuarios/:id", obtenerUsuarioPorId);

routerUsuarios.put("/api/usuarios/:id", editarUsuarioPorId);

routerUsuarios.put(
  "/api/usuarios/modificacion/:id",
  editarUsuarioPorIdModificado
);

routerUsuarios.delete("/api/usuarios/:id", eliminarUsuarioPorId);

export default routerUsuarios;
