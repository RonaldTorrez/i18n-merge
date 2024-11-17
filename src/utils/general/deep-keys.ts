import { isObject } from '@/utils/validation/is-object'
import { type Object, ObjectNoNSchema } from '@/utils/validation/object.schema'

export function getDeepestKeys<T extends Object>(data: T): string[] {
    ObjectNoNSchema.parse(data)
    const uniqueKeys: Set<string> = new Set()

    for (const key in data) {
        // eslint-disable-next-line no-prototype-builtins
        if (data.hasOwnProperty(key)) {
            const value = data[key]

            if (isObject(value)) {
                // @ts-ignore
                const subKeys = getDeepestKeys(value)

                for (const subKey of subKeys) {
                    uniqueKeys.add(subKey)
                }
            }
            else {
                uniqueKeys.add(key)
            }
        }
    }

    return [ ...uniqueKeys ]
}
