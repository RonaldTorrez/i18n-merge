import { StringNoNSchema, StringSchema } from '@/utils/string/string.schema'

export function isString<T extends string>(
    value: T,
): value is string & T {
    try {
        StringSchema.parse(value)

        return true
    }
    catch {
        return false
    }
}

export function isStringNoN<T>(
    value: T,
): value is string & T {
    try {
        StringNoNSchema.parse(value)

        return true
    }
    catch {
        return false
    }
}
