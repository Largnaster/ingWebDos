("use strict");
import express from "express";
import morgan from "morgan";
import cors from "cors";
const app = express();
import path from "path";

app.use(morgan("common"));
app.use(cors());
app.use(express.static(path.join(__dirname + "/public")));

app.set("puerto", process.env.PORT || 5500);

app.listen(app.get("puerto"), () =>
  console.log("Aplicacion escuchando en el puerto " + app.get("puerto"))
);