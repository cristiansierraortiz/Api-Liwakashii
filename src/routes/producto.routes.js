import { Router } from "express";
const api = Router();
import {} from "../controllers/Producto.controller";

api.get("api/productos", (req, res) => res.send("loros"));

export default api;
