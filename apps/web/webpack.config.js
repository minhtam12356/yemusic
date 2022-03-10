module.exports = (config, context) => {
  return {
    ...config,
    devServer: {
      ...config.devServer,
      port: process.env.NX_DEV_WEB_PORT || config.devServer.port,
    },
  };
};
