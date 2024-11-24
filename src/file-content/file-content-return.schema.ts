import { _StringNoNSchema } from '@/utils/string/string.schema'
import { _ObjectNoNSchema } from '@/utils/validation/object.schema'
import { ZodAccelerator } from '@duplojs/zod-accelerator'
import { z } from 'zod'

export const _FilesContentReturnSchema = z
    .object({
        content: _ObjectNoNSchema,
        filename: _StringNoNSchema,
        path: _StringNoNSchema,
    })
    .array()
    .describe('The schema of the file.')

export type FilesContentReturn = z.input<typeof _FilesContentReturnSchema>
export const FilesContentReturnSchema = ZodAccelerator.build(_FilesContentReturnSchema)
