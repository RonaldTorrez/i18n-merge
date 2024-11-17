import { type Logger } from '@/logger/logger'

export const getUniqueValues = <T, K extends keyof T>(
    properties: {
        data: T[]
        filterBy: K[]
        logger: Logger
    },
): { [ key: string ]: Set<string> } => {
    const { data, filterBy } = properties
    const uniqueValues: { [ key: string ]: Set<string> } = {}

    for (const key of filterBy) {
        uniqueValues[key as string] = new Set()
        for (const item of data) {
            uniqueValues[key as string].add(item[key] as string)
        }
    }

    return uniqueValues
}
