import { DEFAULT_NAMESPACE_KEY } from '@/app/const.app'
import { _CosmiconfigSchema } from '@/cosmiconfig/cosmiconfig.schema'
import { _FilePathsSchema } from '@/file-paths/file-paths.schema'
import { _LoggerConfigSchema } from '@/logger/logger.schema'
import { _StringNoNSchema } from '@/utils/string/string.schema'
import { ZodAccelerator } from '@duplojs/zod-accelerator'
import { z } from 'zod'

const _i18nMergeConfigSchema = z
    .object({
        filePaths: _FilePathsSchema
            .pick({
                ignore: true,
                paths: true,
            })
            .extend({
                namespaceKey: _StringNoNSchema
                    .default(DEFAULT_NAMESPACE_KEY)
                    .describe('The key to use for the default namespace.'),
            })
            .describe('The paths to search for i18n files.'),
    })
    // @ts-ignore
    .merge(_CosmiconfigSchema.pick({ loaders: true }))
    .merge(_LoggerConfigSchema.pick({ logLevel: true }))

export type i18nMergeConfig = z.input<typeof _i18nMergeConfigSchema>
export const i18nMergeConfigSchema = ZodAccelerator.build(_i18nMergeConfigSchema)
