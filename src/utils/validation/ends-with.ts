import { type StringNoN, StringNoNSchema } from '@/utils/string/string.schema'

export function endsWith<T extends string>(
    parameters: {
        endsWith: T
        text: T
    },
): boolean {
    try {
        const validatedText: StringNoN = StringNoNSchema.parse(parameters.text)
        const validatedEnd: StringNoN = StringNoNSchema.parse(parameters.endsWith)

        return validatedText.endsWith(validatedEnd)
    }
    catch {
        return false
    }
}
