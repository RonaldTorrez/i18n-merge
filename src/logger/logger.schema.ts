import { Logger } from '@/logger/logger'
import { LogLevelEnum } from '@/logger/logger-level.schema'
import { ZodAccelerator } from '@duplojs/zod-accelerator'
import { Signale } from 'signale'
import { z } from 'zod'

export const _LoggerSchema = z.object({
    logger: z
        .custom<Logger>(value => value instanceof Signale)
        .describe('The logger to use.'),
})

export const _LoggerConfigSchema = z.object({
    logLevel: LogLevelEnum
        .default(LogLevelEnum.enum.error)
        .describe('The log level to use.'),
})

export type LoggerConfig = z.input<typeof _LoggerConfigSchema>
export const LoggerConfigSchema = ZodAccelerator.build(_LoggerConfigSchema)
