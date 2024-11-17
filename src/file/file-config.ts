import { GetFileConfig, GetFileConfigSchema } from '@/file/file-config.schema'
import { cosmiconfig, PublicExplorer } from 'cosmiconfig'
import { TypeScriptLoader } from 'cosmiconfig-typescript-loader'

export function getFileConfig(
    parameters: GetFileConfig,
): PublicExplorer {
    const {
        fileName,
        loaders,
        logger,
    } = GetFileConfigSchema.parse(parameters)

    return cosmiconfig(fileName, {
        loaders: {
            '.ts': TypeScriptLoader(),
            ...loaders,
        },
    })
}
