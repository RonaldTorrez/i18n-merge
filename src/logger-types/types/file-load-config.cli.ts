import { createLoggerTypes } from '@/logger-types/logger-types'

export const fileLoadConfigTypes = createLoggerTypes({
    color: 'blueBright',
    prefix: 'fileLoadConfig',
    symbol: '🗳',
    types: [
        {
            key: 'init',
            logLevel: 'info',
        },
    ],
})
