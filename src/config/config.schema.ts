import { _GetFileConfigSchema } from '@/file/file-config.schema'
import { _LoggerSchema } from '@/logger/logger.schema'
import { LogLevelEnum } from '@/logger/logger-level.schema'
import { ZodAccelerator } from '@duplojs/zod-accelerator'
import { z } from 'zod'

const _i18nMergeConfigSchema = z
    .object({
        logLevel: LogLevelEnum
            .default(LogLevelEnum.enum.error)
            .describe('The log level to use.'),
    })
    // @ts-ignore
    .merge(_GetFileConfigSchema.pick({ loaders: true }))

export type i18nMergeConfig = z.input<typeof _i18nMergeConfigSchema>
export const i18nMergeConfigSchema = ZodAccelerator.build(_i18nMergeConfigSchema)

const _GetConfigSchema = _LoggerSchema.extend({})

export type GetConfig = z.input<typeof _GetConfigSchema>
export const GetConfigSchema = ZodAccelerator.build(_GetConfigSchema)
