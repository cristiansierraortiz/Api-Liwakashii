import { Router } from "express";
const routerProductos = Router();
import controller from "../controllers/productos.controller";

routerUsuarios.get("api/productos", (req, res) => res.send("loros"));

export default routerProductos;
