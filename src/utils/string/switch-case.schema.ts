import { _StringSchema } from '@/utils/string/string.schema'
import { ZodAccelerator } from '@duplojs/zod-accelerator'
import { z } from 'zod'

export const SwitchCaseEnum = z.enum([
    'toCamelCase',
    'toCapitalCase',
    'toKebabCase',
    'toLowerCase',
    'toPascalCase',
    'toSnakeCase',
    'toUpperCase',
    'noCase',
])

export const _SwitchCaseBaseSchema = z.object({
    cleanWhitespaces: z.boolean()
        .default(true)
        .describe(
            'If true, the string will be cleaned of all whitespaces.'),
    word: _StringSchema
        .describe('The string to parse.'),
})

export type SwitchCaseBase = z.input<typeof _SwitchCaseBaseSchema>
export const SwitchCaseSchema = ZodAccelerator.build(_SwitchCaseBaseSchema)
