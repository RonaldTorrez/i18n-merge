import { CONFIG_FILE_NAME } from '@/app/const.app'
import { i18nMergeConfig, i18nMergeConfigSchema } from '@/config/config.schema'
import { initFileConfig } from '@/file/file-config'
import { initLoggerConfig } from '@/logger/logger'
import { CosmiconfigResult, PublicExplorer } from 'cosmiconfig'

export async function loadConfig(): Promise<i18nMergeConfig> {
    const fileConfig: PublicExplorer = initFileConfig({
        fileName: CONFIG_FILE_NAME,
        logger: initLoggerConfig({}),
    })

    const searchConfig: CosmiconfigResult = await fileConfig.search()

    return i18nMergeConfigSchema.parse(searchConfig?.config)
}
