import "reflect-metadata";
import "express-async-errors";

import express from "express";

import { setupRoutes } from "./routes";

import "./container";
import "./server";
import errorHandler from "./infrastructure/middleware/error-handling";
import { setupDocs } from "./documentation";

const app = express();

app.use(express.json());
const port = process.env.PORT || 3000;

setupRoutes(app);

setupDocs(app);

app.use(errorHandler);

app.listen(port, () => console.log(`App listening on PORT ${port}`));
