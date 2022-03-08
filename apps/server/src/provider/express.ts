import * as express from 'express';

import config from '../config';
import routers from '../routers';

export const loadServer = async () => {
  const server = express();
  routers(server);
  const API_PORT = config.port;
  server.listen(API_PORT, () => {
    logger.info(`🔥 ${config.hostName}:${config.port}/api`);
  });
};
