import { _i18nFileSchemaSchema } from '@/config/config.schema'
import { _FilesContentReturnSchema } from '@/file-content/file-content-return.schema'
import { _LoggerSchema } from '@/logger/logger.schema'
import { ZodAccelerator } from '@duplojs/zod-accelerator'
import { z } from 'zod'

export const _FileNamespaceSchema = _LoggerSchema
    .extend({
        filesContent: _FilesContentReturnSchema
            .array()
            .min(1)
            .describe('The files\' content.'),
    })
    .extend(_i18nFileSchemaSchema
        .pick({ namespaceSchema: true })
        .required()
        .shape,
    )
    .describe('The file\'s namespace.')

export type FileNamespace = z.input<typeof _FileNamespaceSchema>
export const FileNamespaceSchema = ZodAccelerator.build(_FileNamespaceSchema)
