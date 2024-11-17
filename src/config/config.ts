import { CONFIG_FILE_NAME } from '@/app/const.app'
import { i18nMergeConfig, i18nMergeConfigSchema } from '@/config/config.schema'
import { getFileConfig } from '@/file/file-config'
import { getLoggerConfig } from '@/logger/logger'
import { CosmiconfigResult, PublicExplorer } from 'cosmiconfig'

export async function getConfig(): Promise<i18nMergeConfig> {
    const fileConfig: PublicExplorer = getFileConfig({
        fileName: CONFIG_FILE_NAME,
        logger: getLoggerConfig({}),
    })

    const searchConfig: CosmiconfigResult = await fileConfig.search()

    return i18nMergeConfigSchema.parse(searchConfig?.config)
}
