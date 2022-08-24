import "reflect-metadata";
import "express-async-errors";

import express from "express";

import errorHandler from "./infrastructure/middleware/error-handling";
import { setupRoutes } from "./utils/routes";
import { setupDocs } from "./utils/documentation";

import "./container";
import "./utils/server";
import "./utils/config"

const app = express();

app.use(express.json());

setupRoutes(app);
setupDocs(app);

app.use(errorHandler);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening on PORT ${port}`));
