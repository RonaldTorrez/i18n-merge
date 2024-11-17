import { ObjectSchema } from '@/utils/validation/object.schema'

export function isObject<T>(
    object: T,
): object is boolean & T {
    try {
        ObjectSchema.parse(object)

        return true
    }
    catch {
        return false
    }
}
