import { z } from 'zod'

export function isBoolean<T extends boolean>(
    value: T,
): value is T {
    try {
        z.boolean().parse(value)

        return true
    }
    catch {
        return false
    }
}
