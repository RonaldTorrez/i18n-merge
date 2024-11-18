import { WHITESPACE_GLOBAL_REGEX } from '@/app/regexp'
import { LoggerTypes } from '@/logger-types/logger-types.schema'
import { CreateLoggerTypes, CreateLoggerTypesSchema } from '@/logger-types/logger-types-create.schema'
import { toCamelCase } from '@/utils/string/to-camel-case'
import { isEmpty } from '@/utils/validation/is-empty'

export function createLoggerTypes(
    parameters: CreateLoggerTypes,
): LoggerTypes {
    const {
        color,
        prefix,
        symbol,
        types,
    } = CreateLoggerTypesSchema.parse(parameters)

    const all: LoggerTypes = {}

    for (const { key, logLevel, usePrefixToLabel } of types) {
        const setKey: string = isEmpty(prefix)
            ? key
            : toCamelCase({ word: `${prefix} ${key}` })
        const setLabel = (usePrefixToLabel && !isEmpty(prefix))
            ? `${prefix} ${key}`
            : key

        all[setKey] = {
            badge: symbol,
            color,
            label: setLabel.trim().replace(WHITESPACE_GLOBAL_REGEX, ':'),
            logLevel,
        }
    }

    return all
}
