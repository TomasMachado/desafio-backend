import { Express } from "express";

import { ToolsRoute } from "@/shared/infrastructure/routes/tools";

export const setupRoutes = (app: Express) => {
  app.use("/tools", ToolsRoute);
};
