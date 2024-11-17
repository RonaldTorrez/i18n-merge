import { LogLevelEnum } from '@/logger/logger-level.schema'
import { LoggerTypesColorEnum } from '@/logger-types/logger-types-color.schema'
import { _StringNoNSchema, _StringSchema } from '@/utils/string/string.schema'
import { ZodAccelerator } from '@duplojs/zod-accelerator'
import { z } from 'zod'

export const _CreateLoggerTypesSchema = z.object({
    color: LoggerTypesColorEnum
        .describe('The color of the logger\'s label.'),
    prefix: _StringSchema
        .toLowerCase()
        .default('')
        .describe(
            'The prefix to add to the logger\'s label.'),
    symbol: _StringNoNSchema
        .describe(
            'The symbol to add to the logger\'s label.'),
    types: z
        .object({
            key: _StringNoNSchema
                .toLowerCase()
                .describe(
                    'The name of the logger\'s label.'),
            logLevel: LogLevelEnum
                .default(LogLevelEnum.enum.debug)
                .describe(
                    'The log level of the logger\'s label.',
                ),
            usePrefixToLabel: z
                .boolean()
                .default(true)
                .describe(
                    'If true, the prefix will be added to the logger\'s label.'),
        })
        .array()
        .nonempty()
        .describe('The types of the logger\'s label.'),
})

export type CreateLoggerTypes = z.input<typeof _CreateLoggerTypesSchema>
export const CreateLoggerTypesSchema = ZodAccelerator.build(_CreateLoggerTypesSchema)
