import { type StringNoN, StringNoNSchema } from '@/utils/string/string.schema'
import fs from 'fs-extra'

interface Parameters {
    checkFunction?: (stats: fs.Stats) => boolean
    path: string
}

async function checkPath(parameters: Parameters): Promise<boolean> {
    try {
        const { checkFunction, path } = parameters
        const validated: StringNoN = StringNoNSchema.parse(path)

        if (!await fs.pathExists(validated)) {
            return false
        }

        const stats: fs.Stats = await fs.stat(validated)

        return checkFunction ? checkFunction(stats) : true
    }
    catch {
        return false
    }
}

export function isDirectory(parameters: Pick<Parameters, 'path'>): Promise<boolean> {
    return checkPath(
        {
            checkFunction: stats => stats.isDirectory(),
            path: parameters.path,
        },
    )
}

export function isFile(parameters: Pick<Parameters, 'path'>): Promise<boolean> {
    return checkPath(
        {
            checkFunction: stats => stats.isFile(),
            path: parameters.path,
        },
    )
}

export function pathExists(parameters: Pick<Parameters, 'path'>): Promise<boolean> {
    return checkPath({ path: parameters.path })
}
