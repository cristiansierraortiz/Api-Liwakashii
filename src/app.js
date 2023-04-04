import express from "express";
import config from "./config";
import routerUsuarios from "./routes/usuario.routes";
import cors from "cors";

const app = express();
app.use(cors());

// configuracion servidor
app.set("port", config.PORT);

//middlewares
app.use(express.json({ type: "application/json" }));
app.use(express.urlencoded({ extended: false }));

// headers
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header("Allow", "GET, PUT, POST, DELETE, OPTIONS");
  next();
});

// routes
app.use("/api", routerUsuarios);

export { app };
