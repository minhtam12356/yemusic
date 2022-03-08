type Logger = {
  level: string;
};

export type HttpServerConfig = {
  hostName: string;
  port: number;
  logger: Logger;
};
