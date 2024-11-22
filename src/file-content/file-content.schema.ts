import { _CosmiconfigSchema } from '@/cosmiconfig/cosmiconfig.schema'
import { _LoggerSchema } from '@/logger/logger.schema'
import { ZodAccelerator } from '@duplojs/zod-accelerator'
import { Entry } from 'fast-glob'
import { z } from 'zod'

const _FileContentSchema = _LoggerSchema
    .extend({
        paths: z
            .array(z.custom<Entry>())
            .nonempty()
            .describe('The paths to load.'),
    })
    // @ts-ignore
    .merge(_CosmiconfigSchema.pick({ loaders: true }))

export type FileContent = z.input<typeof _FileContentSchema>
export const FileContentSchema = ZodAccelerator.build(_FileContentSchema)
