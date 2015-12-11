import path from "path";

import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import html from "./helpers/html";

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/static", express.static(path.join(__dirname, "../dist"), {maxAge: 365 * 24 * 60 * 60} ));
app.get("/", (req, res) => res.status(200).send(html()));
app.listen(3002);
