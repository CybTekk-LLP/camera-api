import express from "express";
import { Logger } from "./logger";
import { UPLOADS_PATH } from "./env.config";
import { appRouter } from "@/interfaces/routers";
import cors from "cors";
import { corsConfig } from "@/interfaces/middleware";
import { AppDataSource } from "@/infrastructure";

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
  private connectDatabase() {
    AppDataSource.initialize()
      .then(() => {
        Logger.info("🤠: Database connection instantiated");
      })
      .catch((e) => {
        Logger.error(e);
        throw new Error("500::Failed to connect to database");
      });
  }

  start() {
    const port = this.config.port ?? 1209;
    this.connectDatabase();
    this.app.listen(port, () => {
      Logger.info(`🚀: Server started on http://localhost:` + port);
    });
  }
}
