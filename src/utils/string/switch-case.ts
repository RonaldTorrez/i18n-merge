import { type SwitchCaseBase } from '@/utils/string/switch-case.schema'
import { toCamelCase } from '@/utils/string/to-camel-case'
import { toCapitalCase } from '@/utils/string/to-capital-case'
import { toKebabCase } from '@/utils/string/to-kebab-case'
import { toLowerCase } from '@/utils/string/to-lower-case'
import { toPascalCase } from '@/utils/string/to-pascal-case'
import { toSnakeCase } from '@/utils/string/to-snake-case'
import { toUpperCase } from '@/utils/string/to-upper-case'

type CaseConverter = (parameters: SwitchCaseBase) => string
const caseConverters: Record<string, CaseConverter> = {
    noCase: ({ word }) => word,
    toCamelCase,
    toCapitalCase,
    toKebabCase,
    toLowerCase,
    toPascalCase,
    toSnakeCase,
    toUpperCase,
}

export const useSwitchCase: Record<keyof typeof caseConverters, CaseConverter> = caseConverters
