import { _StringNoNSchema, _StringSchema } from '@/utils/string/string.schema'
import { ZodAccelerator } from '@duplojs/zod-accelerator'
import { z } from 'zod'

export const _ObjectSchema = z
    .record(_StringSchema, z.unknown())

export type Object = z.infer<typeof _ObjectSchema>
export const ObjectSchema = ZodAccelerator.build(_ObjectSchema)

export const _ObjectNoNSchema = z
    .record(_StringNoNSchema, z.unknown())
    .refine(
        object => Object.keys(object).length > 0,
        { message: 'Object must not be empty.' },
    )
export const ObjectNoNSchema = ZodAccelerator.build(_ObjectNoNSchema)
