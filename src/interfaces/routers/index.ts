import { Router } from "express";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const swaggerFile = require("./../../swagger.output.json");

import swaggerUi from "swagger-ui-express";
import uploadRouter from "./upload.router";

const appRouter = Router();

appRouter.use("/uploads", uploadRouter);
appRouter.use("/docs", swaggerUi.serve);
appRouter.use("/docs", swaggerUi.setup(swaggerFile));

export { appRouter };
