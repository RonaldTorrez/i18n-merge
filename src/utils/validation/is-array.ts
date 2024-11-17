import { z } from 'zod'

export function isArray<T extends Array<unknown>>(
    array: T,
): array is T {
    try {
        z.array(z.unknown()).parse(array)

        return true
    }
    catch {
        return false
    }
}
