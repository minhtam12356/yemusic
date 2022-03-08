import healthCheckRouter from "./healthcheck";

export default (server) => {
    server.use('/api',healthCheckRouter);
  };
  