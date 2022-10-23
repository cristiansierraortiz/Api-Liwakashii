import { Router } from "express";
const routerDetalleVenta = Router();
import controller from "../controllers/detalle-venta.controller";

routerDetalleVenta.get("/api/detalle-venta", (req, res) => res.send("loros"));

export default routerDetalleVenta;
