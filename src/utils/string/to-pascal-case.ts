import { WHITESPACE_GLOBAL_REGEX } from '@/app/regexp'
import { type SwitchCaseBase, SwitchCaseSchema } from '@/utils/string/switch-case.schema'
import { toCapitalCase } from '@/utils/string/to-capital-case'

export function toPascalCase(parameters: SwitchCaseBase): string {
    const validated = SwitchCaseSchema.parse(parameters)

    return toCapitalCase(validated)
        .replace(WHITESPACE_GLOBAL_REGEX, '')
}
