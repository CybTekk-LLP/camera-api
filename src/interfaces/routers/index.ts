import { Router } from "express";
import uploadRouter from "./upload.router";
import emailrouter from "./email.router";
import userRouter from "./user.router";

const appRouter = Router();

appRouter.use("/uploads", uploadRouter);
appRouter.use("/email", emailrouter);
appRouter.use("/users", userRouter);

export { appRouter };
