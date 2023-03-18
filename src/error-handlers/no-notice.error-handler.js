const loggerService = require('../services/logger.service');
const BaseError = require('../models/BaseError');

function noNoticeErrorHandler(err) {
  const error = new BaseError({ origin: err });
  const { message, code, name, detailsStack } = error;
  loggerService.error(`name=${name}`, `code=${code}`, `message=${message}`);
  loggerService.base(JSON.stringify(detailsStack, null, 2));
}

module.exports = noNoticeErrorHandler;
