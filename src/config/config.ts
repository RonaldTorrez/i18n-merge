import { CONFIG_FILE_NAME } from '@/app/const.app'
import { i18nMergeConfig, i18nMergeConfigSchema } from '@/config/config.schema'
import { initCosmiconfig } from '@/cosmiconfig/cosmiconfig'
import { initLoggerConfig } from '@/logger/logger'
import { CosmiconfigResult, PublicExplorer } from 'cosmiconfig'

export async function loadConfig(): Promise<i18nMergeConfig> {
    const cosmiconfig: PublicExplorer = initCosmiconfig({
        fileName: CONFIG_FILE_NAME,
        logger: initLoggerConfig({}),
    })

    const searchConfig: CosmiconfigResult = await cosmiconfig.search()

    return i18nMergeConfigSchema.parse(searchConfig?.config)
}
