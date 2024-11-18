import { _FileConfigSchema } from '@/file/file-config.schema'
import { _GetFilePathsSchema } from '@/file-paths/file-paths.schema'
import { _LoggerConfigSchema } from '@/logger/logger.schema'
import { ZodAccelerator } from '@duplojs/zod-accelerator'
import { z } from 'zod'

const _i18nMergeConfigSchema = z
    .object({
        filePaths: _GetFilePathsSchema.pick({
            ignore: true,
            paths: true,
        }),
    })
    // @ts-ignore
    .merge(_FileConfigSchema.pick({ loaders: true }))
    .merge(_LoggerConfigSchema.pick({ logLevel: true }))

export type i18nMergeConfig = z.input<typeof _i18nMergeConfigSchema>
export const i18nMergeConfigSchema = ZodAccelerator.build(_i18nMergeConfigSchema)
