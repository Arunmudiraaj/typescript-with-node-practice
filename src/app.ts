import express from "express";
import bodyParser from "body-parser";
import todoRoutes from "./routes/todos";

const app = express();

app.use(bodyParser.json());

app.use("/todos", todoRoutes);

app.listen(8080);
