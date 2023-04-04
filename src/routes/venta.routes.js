import { Router } from "express";
const api = Router();
import {  } from "../controllers/Venta.controller";

api.get("api/ventas", (req, res) => res.send("loros"));

export default api;
