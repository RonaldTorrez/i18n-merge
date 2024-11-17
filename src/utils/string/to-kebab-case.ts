import { WHITESPACE_GLOBAL_REGEX } from '@/app/regexp'
import { type SwitchCaseBase, SwitchCaseSchema } from '@/utils/string/switch-case.schema'
import { toLowerCase } from '@/utils/string/to-lower-case'

export function toKebabCase(parameters: SwitchCaseBase): string {
    const validated = SwitchCaseSchema.parse(parameters)

    return toLowerCase(validated)
        .replace(WHITESPACE_GLOBAL_REGEX, '-')
}
