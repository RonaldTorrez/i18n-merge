import { WHITESPACE_GLOBAL_REGEX } from '@/app/regexp'
import { type SwitchCaseBase, SwitchCaseSchema } from '@/utils/string/switch-case.schema'

export function toLowerCase(parameters: SwitchCaseBase): string {
    const {
        cleanWhitespaces,
        word,
    } = SwitchCaseSchema.parse(parameters)

    const cleanedWord = cleanWhitespaces
        ? word.replace(WHITESPACE_GLOBAL_REGEX, ' ')
        : word

    return cleanedWord.toLowerCase()
}
