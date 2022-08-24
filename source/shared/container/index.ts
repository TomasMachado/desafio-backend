import "reflect-metadata";

import { container } from "tsyringe";

import { IToolsRepository } from "@/modules/tools/repositories/tools-repository-interface";
import { ToolsRepository } from "@/domain/tools/infra/typeorm/repositories/tools-repository";

container.registerSingleton<IToolsRepository>(
  "ToolsRepository",
  ToolsRepository
);
