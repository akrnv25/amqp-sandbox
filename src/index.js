const amqpService = require('./services/amqp.service');
const loggerService = require('./services/logger.service');

const exchange = 'amq.topic';
const queue = '';
const pattern = 'notification.v1.*.*.*.cmd.create';
const topic = 'notification.v1.best-bar.tel-aviv.deborah.cmd.create';

amqpService.consume(exchange, queue, pattern, (channel, message) => {
  loggerService.base(JSON.stringify(message));
  channel.ack(message);
});

setTimeout(() => {
  amqpService.publish(exchange, topic, {
    text: 'Some notification',
    code: 200
  });
}, 3000);

setTimeout(() => {
  amqpService.publish(exchange, topic, {
    text: 'Some notification',
    code: 200
  });
}, 5000);

setTimeout(() => {
  amqpService.publish(exchange, topic, {
    text: 'Some notification',
    code: 200
  });
}, 7000);
