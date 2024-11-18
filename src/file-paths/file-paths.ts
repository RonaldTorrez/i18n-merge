import { type GetFilePaths, GetFilePathsSchema } from '@/file-paths/file-paths.schema'
import fg, { type Entry } from 'fast-glob'

export async function getFilePaths(
    parameters: GetFilePaths,
): Promise<Entry[]> {
    const {
        ignore,
        paths,
    } = GetFilePathsSchema.parse(parameters)

    return await fg(paths, {
        ignore,
        objectMode: true,
    })
}
