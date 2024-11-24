import { DEFAULT_NAMESPACE_SCHEMA, NODE_MODULE } from '@/app/const.app'
import { _CosmiconfigSchema } from '@/cosmiconfig/cosmiconfig.schema'
import { _SearchFilePathsSchema } from '@/file-paths/file-paths.schema'
import { _LoggerConfigSchema } from '@/logger/logger.schema'
import { _StringNoNSchema } from '@/utils/string/string.schema'
import { ZodAccelerator } from '@duplojs/zod-accelerator'
import { z } from 'zod'

export const _i18nMergeConfigFileSchemaSchema = z.object({
    schema: z
        .object({
            namespace: _StringNoNSchema
                .describe(
                    'The key to use for the default namespace.'),
        })
        .default({
            namespace: DEFAULT_NAMESPACE_SCHEMA,
        })
        .describe(
            'The schema to use for the files options.'),
})

export const _i18nMergeConfigFilesSchema = z.object({
    files: _SearchFilePathsSchema
        .pick({
            ignore: true,
            paths: true,
        })
        .extend({
            ignoreNodeModules: z
                .boolean()
                .default(true)
                .describe(
                    'If true, the node_modules directory will be ignored.'),
        })
        .extend(_i18nMergeConfigFileSchemaSchema.shape)
        .transform((value) => {
            if (value.ignoreNodeModules) {
                value.ignore.push(NODE_MODULE)
            }

            return value
        })
        .transform(value => ({
            ...value,
            ignore: [ ...new Set(value.ignore) ],
        }),
        )
        .describe('The paths to search for i18n files.'),
})

const _i18nMergeConfigSchema = _CosmiconfigSchema
    .pick({ loaders: true })
    .extend(_LoggerConfigSchema.pick({ logLevel: true }).shape)
    .extend(_i18nMergeConfigFilesSchema.shape)

export type i18nMergeConfig = z.input<typeof _i18nMergeConfigSchema>
export const i18nMergeConfigSchema = ZodAccelerator.build(_i18nMergeConfigSchema)
