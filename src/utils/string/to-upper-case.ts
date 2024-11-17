import { type SwitchCaseBase, SwitchCaseSchema } from '@/utils/string/switch-case.schema'
import { toLowerCase } from '@/utils/string/to-lower-case'

export function toUpperCase(
    parameters: SwitchCaseBase,
): string {
    const validated = SwitchCaseSchema.parse(parameters)

    return toLowerCase(validated).toUpperCase()
}
