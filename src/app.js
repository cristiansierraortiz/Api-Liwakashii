import express from "express";
import config from "./config";
import routerUsuarios from "./routes/usuarios.routes";
import routerDetalleVentas from "./routes/detalle-venta.routes";
import cors from "cors";

const app = express();
app.use(cors());

// configuracion servidor
app.set("port", config.PORT);

//middlewares
app.use(express.json({type: "application/json"}));
app.use(express.urlencoded({ extended: false }));
app.use(routerUsuarios, routerDetalleVentas);

export default app;
