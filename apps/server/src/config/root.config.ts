
import { HttpServerConfig } from "./type.config";

const config: HttpServerConfig = {
  hostName: process.env.API_HOSTNAME || 'http://localhost',
  port: Number(process.env.API_PORT || 3000),
  logger: {
    level: process.env.LOGGING_LEVEL || 'debug',
  }
};

export default config;