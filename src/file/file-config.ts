import { FileConfig, FileConfigSchema } from '@/file/file-config.schema'
import { cosmiconfig, PublicExplorer } from 'cosmiconfig'
import { TypeScriptLoader } from 'cosmiconfig-typescript-loader'

export function initFileConfig(
    parameters: FileConfig,
): PublicExplorer {
    const {
        fileName,
        loaders,
        logger,
    } = FileConfigSchema.parse(parameters)

    return cosmiconfig(fileName, {
        loaders: {
            '.ts': TypeScriptLoader(),
            ...loaders,
        },
    })
}
