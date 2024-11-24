import { type SearchFilePaths, SearchFilePathsSchema } from '@/file-paths/file-paths.schema'
import fg, { type Entry } from 'fast-glob'

export async function searchFilePaths(
    parameters: SearchFilePaths,
): Promise<Entry[]> {
    const {
        ignore,
        paths,
    } = SearchFilePathsSchema.parse(parameters)

    return await fg(paths, {
        ignore,
        objectMode: true,
    })
}
