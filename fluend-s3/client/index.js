const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.Console()
  ]
});

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

async function example() {

    for (let i = 0; i < 1000; i++) {    
        logger.error('This is an error message');
        logger.warn('This is a warning message');
        logger.info('This is an info message');
        logger.verbose('This is a verbose message');
        logger.debug('This is a debug message');
        logger.silly('This is a silly message');

        await delay(100);
    }
}

example();
