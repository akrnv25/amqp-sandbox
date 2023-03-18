module.exports = {
  amqp: {
    protocol: process.env.AMQP_PROTOCOL || 'amqp',
    user: process.env.AMQP_USER || 'guest',
    password: process.env.AMQP_PASSWORD || 'guest',
    host: process.env.AMQP_HOST || 'localhost',
    port: process.env.AMQP_PORT || 5672,
    vhost: process.env.AMQP_VHOST || 'dev'
  },
  logger: {
    writeToFile: process.env.LOGGER_WRITE_TO_FILE || true,
    fileName: process.env.LOGGER_FILE_NAME || './logs/combined.log'
  },
  serviceData: {
    name: process.env.SERVICE_NAME ?? 'amqp-sandbox',
    partner: process.env.SERVICE_PARTNER ?? 'any',
    location: process.env.SERVICE_LOCATION ?? 'any',
    hotel: process.env.SERVICE_HOTEL ?? 'any'
  }
};
