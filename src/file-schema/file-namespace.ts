import { FILE_EXTENSION_REGEX, NON_ALPHANUMERIC_GLOBAL_REGEX } from '@/app/regexp'
import { FilesContentReturn } from '@/file-content/file-content-return.schema'
import { type FileNamespace, FileNamespaceSchema } from '@/file-schema/file-namespace.schema'
import { type StringNoN } from '@/utils/string/string.schema'

export function setFileNamespace(
    parameters: FileNamespace,
): FilesContentReturn[] {
    const {
        filesContent,
        logger,
        namespaceSchema,
    } = FileNamespaceSchema.parse(parameters)

    return filesContent.map((fileContent: FilesContentReturn): FilesContentReturn => {
        const namespace: StringNoN = fileContent.content[namespaceSchema]
            ? fileContent.content[namespaceSchema] as StringNoN
            : fileContent.filename
                .replace(FILE_EXTENSION_REGEX, '')
                .replace(NON_ALPHANUMERIC_GLOBAL_REGEX, '')

        delete fileContent.content[namespaceSchema]

        return {
            ...fileContent,
            namespace,
        }
    })
}
