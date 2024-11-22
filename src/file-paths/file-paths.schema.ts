import { NODE_MODULE } from '@/app/const.app'
import { _LoggerSchema } from '@/logger/logger.schema'
import { _StringNoNArrayNoNSchema, _StringNoNArraySchema } from '@/utils/string/string.schema'
import { ZodAccelerator } from '@duplojs/zod-accelerator'
import { z } from 'zod'

export const _FilePathsSchema = _LoggerSchema.extend({
    ignore: _StringNoNArraySchema
        .default([ NODE_MODULE ])
        .describe(
            'An array of strings specifying the paths to ignore in the search.'),
    paths: _StringNoNArrayNoNSchema
        .describe(
            'An array of strings specifying the paths to include',
        ),
})

export type FilePaths = z.input<typeof _FilePathsSchema>

export const FilePathsSchema = ZodAccelerator.build(_FilePathsSchema)
