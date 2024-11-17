import { type SwitchCaseBase, SwitchCaseSchema } from '@/utils/string/switch-case.schema'
import { toLowerCase } from '@/utils/string/to-lower-case'

function capitalizeWord(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}

export function toCapitalCase(parameters: SwitchCaseBase): string {
    const validated = SwitchCaseSchema.parse(parameters)
    const lowercase = toLowerCase(validated)

    return lowercase
        .split(' ')
        .map(word => capitalizeWord(word))
        .join(' ')
}
