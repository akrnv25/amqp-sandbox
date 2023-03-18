const loggerService = require('../services/logger.service');
const BaseError = require('../models/BaseError');
const config = require('../config');

function noNoticeErrorHandler(err) {
  const error = new BaseError({ origin: err });
  const { message, code, name, detailsStack } = error;
  loggerService.error(`name=${name}`, `code=${code}`, `message=${message}`);
  loggerService.base(JSON.stringify(detailsStack, null, 2));
  const topic = `notification.v1.${config.serviceData.partner}.${config.serviceData.location}.${config.serviceData.hotel}.cmd.create`;
  // prettier-ignore
  const text = `App: ${config.serviceData.name}. ${name}: ${message}. Details: ${JSON.stringify(detailsStack)}`;
  const notification = { type: 'system/error', message: { text, code } };
  amqpService.publish(config.amqp.exchange, topic, notification);
}

module.exports = noNoticeErrorHandler;
