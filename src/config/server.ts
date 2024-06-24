import express from "express";
import { Logger } from "./logger";

export type AppConfig = {
  port?: number | string;
};

export class Server {
  private app;
  private config: AppConfig;

  constructor(config: AppConfig) {
    this.config = config;
    this.app = express();
  }

  start() {
    const port = this.config.port ?? 1209;
    this.app.listen(port, () => {
      Logger.info(`🚀: Server started on http://localhost:` + port);
      Logger.info(`📝: Serving docs on http://localhost:${port}/api/docs`);
    });
  }
}
