import { Cosmiconfig, CosmiconfigSchema } from '@/cosmiconfig/cosmiconfig.schema'
import { cosmiconfig, PublicExplorer } from 'cosmiconfig'
import { TypeScriptLoader } from 'cosmiconfig-typescript-loader'

export function initCosmiconfig(
    parameters: Cosmiconfig,
): PublicExplorer {
    const {
        fileName,
        loaders,
        logger,
    } = CosmiconfigSchema.parse(parameters)

    return cosmiconfig(fileName, {
        loaders: {
            '.ts': TypeScriptLoader(),
            ...loaders,
        },
    })
}
