import { _StringSchema } from '@/utils/string/string.schema'
import { _ObjectSchema } from '@/utils/validation/object.schema'
import { z } from 'zod'

export function isEmpty<T>(
    value: T,
): value is boolean & T {
    try {
        z.union([
            z.null(),
            z.undefined(),
            _StringSchema.length(0),
            z.array(z.unknown().refine(v => isEmpty(v))),
            _ObjectSchema.refine(object => Object.keys(object).length === 0),
        ]).parse(value)

        return true
    }
    catch {
        return false
    }
}
