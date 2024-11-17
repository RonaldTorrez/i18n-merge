import { WHITESPACE_GLOBAL_REGEX } from '@/app/regexp'
import { type SwitchCaseBase, SwitchCaseSchema } from '@/utils/string/switch-case.schema'
import { toCapitalCase } from '@/utils/string/to-capital-case'

export function toCamelCase(parameters: SwitchCaseBase): string {
    const validated = SwitchCaseSchema.parse(parameters)
    const capitalCase = toCapitalCase(validated)
        .replace(WHITESPACE_GLOBAL_REGEX, '')

    return capitalCase.charAt(0).toLowerCase()
        + capitalCase.slice(1)
}
