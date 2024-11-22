import { type FilePaths, FilePathsSchema } from '@/file-paths/file-paths.schema'
import fg, { type Entry } from 'fast-glob'

export async function getFilePaths(
    parameters: FilePaths,
): Promise<Entry[]> {
    const {
        ignore,
        paths,
    } = FilePathsSchema.parse(parameters)

    return await fg(paths, {
        ignore,
        objectMode: true,
    })
}
