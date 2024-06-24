import express from "express";
import { AppDataSource } from "@/infrastructure";
import {
  AppInterceptor,
  ExpressErrorHandler,
  corsConfig,
  createAdminUser,
  userDeserializer,
} from "@/interfaces/middleware";
import { Logger } from "./logger";

import cors from "cors";
import { UPLOADS_PATH } from "./env.config";

export type AppConfig = {
  port?: number | string;
};

export class Server {
  private app;
  private config: AppConfig;

  constructor(config: AppConfig) {
    this.config = config;
    this.app = express();

    this.app.use(AppInterceptor);

    this.app.use(express.json());

    this.app.use(userDeserializer);

    this.app.use(cors(corsConfig));

    this.app.use("/api/uploads", express.static(UPLOADS_PATH));
    this.app.use(ExpressErrorHandler);
  }

  private connectDatabase() {
    AppDataSource.initialize()
      .then(() => {
        Logger.info("🤠: Database connection instantiated");
        createAdminUser();
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
      Logger.info(`📝: Serving docs on http://localhost:${port}/api/docs`);
    });
  }
}
