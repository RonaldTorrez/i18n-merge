import { type StringNoN, StringNoNSchema } from '@/utils/string/string.schema'

export function startsWith(
    parameters: {
        startsWith: string
        text: string
    },
): boolean {
    try {
        const { startsWith, text } = parameters
        const validatedText: StringNoN = StringNoNSchema.parse(text)
        const validatedStart: StringNoN = StringNoNSchema.parse(startsWith)

        return validatedText.startsWith(validatedStart)
    }
    catch {
        return false
    }
}
