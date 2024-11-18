import { _LoggerSchema } from '@/logger/logger.schema'
import { _StringNoNSchema } from '@/utils/string/string.schema'
import { startsWith } from '@/utils/validation/starts-with'
import { ZodAccelerator } from '@duplojs/zod-accelerator'
import { Loader } from 'cosmiconfig'
import { z } from 'zod'

export const _FileConfigSchema = _LoggerSchema.extend({
    fileName: _StringNoNSchema
        .default('')
        .describe('The name of the file to load.'),
    loaders: z
        .record(
            _StringNoNSchema
                .transform(
                    value => startsWith({
                        startsWith: '.',
                        text: value,
                    })
                        ? value
                        : `.${value}`,
                )
                .describe(
                    'The extension of the file to load.'),
            z
                .custom<Loader>(value => value
                    instanceof Function)
                .describe(
                    'The loader to use when loading the file.'),
        )
        .default({})
        .describe(
            'The loaders to use when loading the file.'),
})

export type FileConfig = z.input<typeof _FileConfigSchema>
export const FileConfigSchema = ZodAccelerator.build(_FileConfigSchema)
