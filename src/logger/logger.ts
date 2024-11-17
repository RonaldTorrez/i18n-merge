import { GetLoggerConfig, GetLoggerConfigSchema } from '@/logger/logger.schema'
import { LoggerTypes } from '@/logger-types/logger-types.schema'
import { fileLoadConfigTypes } from '@/logger-types/types/file-load-config.cli'
import { Signale } from 'signale'

// TODO Pass all loggerCustomTypes keys to Signale types
export type Logger = Signale
let logger: Logger

export const loggerTypes: LoggerTypes = {
    ...fileLoadConfigTypes,
}

export function getLoggerConfig(parameters: GetLoggerConfig): Logger {
    const { logLevel } = GetLoggerConfigSchema.parse(parameters)

    logger ??= new Signale({
        logLevel,
        types: loggerTypes,
    })

    return logger
}
