import { app } from "./app";
import { sincronizarModelos } from "./models/sincronizacion";

app.listen(app.get("port"), () => {
  console.log("servidor iniciado en el puerto", app.get("port"));

  /* Actualización de modelos */
  // sincronizarModelos();
});
