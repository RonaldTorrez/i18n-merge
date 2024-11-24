import { _LoggerSchema } from '@/logger/logger.schema'
import { _StringNoNArrayNoNSchema, _StringNoNArraySchema } from '@/utils/string/string.schema'
import { ZodAccelerator } from '@duplojs/zod-accelerator'
import { z } from 'zod'

export const _SearchFilePathsSchema = _LoggerSchema
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

export type SearchFilePaths = z.input<typeof _SearchFilePathsSchema>

export const SearchFilePathsSchema = ZodAccelerator.build(_SearchFilePathsSchema)
