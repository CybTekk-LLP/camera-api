import express from "express";
import { Logger } from "./logger";
import { UPLOADS_PATH } from "./env.config";
import { appRouter } from "@/interfaces/routers";
import cors from "cors";
import { corsConfig } from "@/interfaces/middleware";

export type AppConfig = {
  port?: number | string;
};

export class Server {
  private app;
  private config: AppConfig;

  constructor(config: AppConfig) {
    this.config = config;
    this.app = express();

    this.app.use(express.json({ limit: "10mb" }));
    this.app.use(cors(corsConfig));

    this.app.use("/api/uploads", express.static(UPLOADS_PATH));

    this.app.use("/api", appRouter);
  }

  start() {
    const port = this.config.port || 1200;
    this.app.listen(port, () => {
      Logger.info(`🚀: Server started on http://localhost:` + port);
    });
  }
}
