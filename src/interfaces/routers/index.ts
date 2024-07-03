import { Router } from "express";
import uploadRouter from "./upload.router";
import emailrouter from "./email.router";

const appRouter = Router();

appRouter.use("/uploads", uploadRouter);
appRouter.use("/email", emailrouter);

export { appRouter };
