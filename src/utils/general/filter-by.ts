import { type Logger } from '@/logger/logger'

export function filterBy<T>(
    parameters: {
        data: T[]
        filterBy: Partial<T>
        logger: Logger
    },
): T[] {
    const { data, filterBy } = parameters

    return data.filter((object) => {
        return Object.entries(filterBy).every(([ key, value ]) => {
            return object[key as keyof T] === value
        })
    })
}
