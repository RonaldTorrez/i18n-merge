import { initCosmiconfig } from '@/cosmiconfig/cosmiconfig'
import { FileContent, FileContentSchema } from '@/file-content/file-content.schema'
import { isEmpty } from '@/utils/validation/is-empty'
import { CosmiconfigResult, PublicExplorer } from 'cosmiconfig'

export async function getFilesContent(
    parameters: FileContent,
) {
    const { loaders, logger, paths } = FileContentSchema.parse(parameters)
    const cosmiconfig: PublicExplorer = initCosmiconfig({ logger })

    const contents = await Promise.all(
        paths.map(async ({ name, path }) => {
            const loadContent: CosmiconfigResult = await cosmiconfig.load(path)

            if (isEmpty(loadContent?.config)) {
                return
            }

            return {
                content: loadContent?.config,
                filename: name,
                path: loadContent?.filepath,
            }
        }),
    )

    return contents.filter(content => content !== undefined)
}
