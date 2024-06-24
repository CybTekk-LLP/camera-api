import { Router } from "express";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const swaggerFile = require("./../../swagger.output.json");

import swaggerUi from "swagger-ui-express";
import usersRouter from "./user.router";
import orderProductRouter from "./orderProduct.router";
import productsRouter from "./product.router";
import checkoutRouter from "./checkout.router";
import organizationRouter from "./organization.router";
import categoryRouter from "./category.router";
import uploadRouter from "./upload.router";
import catalogueRouter from "./catalogue.router";
import contactRouter from "./contact.router";
import demoRequestRouter from "./demoRequest.router";
import planRequestRouter from "./planRequest.router";
import rewardRouter from "./reward.router";

const appRouter = Router();

appRouter.use("/users", usersRouter);
appRouter.use("/order-products", orderProductRouter);
appRouter.use("/products", productsRouter);
appRouter.use("/checkouts", checkoutRouter);
appRouter.use("/organizations", organizationRouter);
appRouter.use("/category", categoryRouter);
appRouter.use("/catalogues", catalogueRouter);
appRouter.use("/rewards", rewardRouter);
appRouter.use("/uploads", uploadRouter);
appRouter.use("/contacts", contactRouter);
appRouter.use("/demo-requests", demoRequestRouter);
appRouter.use("/plan-requests", planRequestRouter);
appRouter.use("/docs", swaggerUi.serve);
appRouter.use("/docs", swaggerUi.setup(swaggerFile));

export { appRouter };
