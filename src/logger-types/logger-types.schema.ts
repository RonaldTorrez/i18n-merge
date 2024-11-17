import { ALPHANUMERIC_COLON_PAIR_REGEX } from '@/app/regexp'
import { LogLevelEnum } from '@/logger/logger-level.schema'
import { LoggerTypesColorEnum } from '@/logger-types/logger-types-color.schema'
import { _StringNoNSchema } from '@/utils/string/string.schema'
import { z } from 'zod'

const _LoggerTypesSchema = z
    .record(
        _StringNoNSchema
            .describe('The name of the logger\'s label.'),
        z.object({
            badge: _StringNoNSchema
                .describe('The symbol to add to the logger\'s label.'),
            color: LoggerTypesColorEnum
                .describe('The color of the logger\'s label.'),
            label: _StringNoNSchema
                .regex(ALPHANUMERIC_COLON_PAIR_REGEX)
                .toLowerCase()
                .describe('The name of the logger\'s label.'),
            logLevel: LogLevelEnum
                .describe('The log level of the logger\'s label.'),
        }),
    )

export type LoggerTypes = z.input<typeof _LoggerTypesSchema>
