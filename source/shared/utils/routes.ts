import { Express } from "express";

import { ToolsRoute } from "@/shared/infrastructure/routes/tools";
import { auth } from "@/shared/infrastructure/middleware/auth"

export const setupRoutes = (app: Express) => {
  app.use(auth)
  app.use("/tools", ToolsRoute);
};
