import { Router } from "express";
const api = Router();
import { auth } from "../middlewares/authenticate";
import { obtenerUsuarios } from "../controllers/Usuario.controller";

api.get("/usuarios", obtenerUsuarios);

export default api;
