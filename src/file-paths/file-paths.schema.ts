import { _LoggerSchema } from '@/logger/logger.schema'
import { _StringNoNArrayNoNSchema, _StringNoNArraySchema } from '@/utils/string/string.schema'
import { ZodAccelerator } from '@duplojs/zod-accelerator'
import { z } from 'zod'

// TODO Rename to SearchFiles or similar
export const _FilePathsSchema = _LoggerSchema
    .extend({
        ignore: _StringNoNArraySchema
            .default([])
            .describe(
                'An array of strings specifying the paths to ignore in the search.'),
        paths: _StringNoNArrayNoNSchema
            .describe(
                'An array of strings specifying the paths to include',
            ),
    })

export type FilePaths = z.input<typeof _FilePathsSchema>

export const FilePathsSchema = ZodAccelerator.build(_FilePathsSchema)
