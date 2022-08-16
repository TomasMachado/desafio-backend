import express from "express";

import createToolSchema from "@/domain/tools/infra/http/validation-schemas/create-tool";
import searchToolSchema from "@/domain/tools/infra/http/validation-schemas/search-tools";

import ToolController from "@/domain/tools/infra/http/controllers/tool-controller";
import {
  validateBody,
  validateQueryParams as validateQueryParams,
} from "../middleware/validation";

const ToolsRoute = express.Router();

const toolController = new ToolController();

ToolsRoute.post("/", validateBody(createToolSchema), toolController.create);
ToolsRoute.get("/", toolController.getAll);
ToolsRoute.delete("/:id", toolController.delete);
ToolsRoute.get(
  "/searching",
  validateQueryParams(searchToolSchema),
  toolController.findByValue
);

export { ToolsRoute };
