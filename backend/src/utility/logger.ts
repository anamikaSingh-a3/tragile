import * as winston from 'winston'

const customFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format.printf(info => {
    return `[${info.timestamp}] > [${info.level.toUpperCase()}] - ${
      info.message
    }`
  })
)
const logger: winston.Logger = winston.createLogger({
  format: customFormat,
  level: 'debug',
  transports: [new winston.transports.Console()]
})

export default logger
