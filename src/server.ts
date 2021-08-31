import "reflect-metadata";
import { createConnection } from "typeorm";
import Express from "express";
import bodyParser from "body-parser";
import { productsRouter } from "./routes/products";

const app = Express();

app.use(bodyParser.json());
app.use("/products/", productsRouter);

createConnection()
    .then(() => console.log("Connection set up."))
    .catch(error => console.error(error));

app.listen(process.env.SERVER_PORT);