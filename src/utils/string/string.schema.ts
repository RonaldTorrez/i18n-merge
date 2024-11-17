import { ZodAccelerator } from '@duplojs/zod-accelerator'
import { z } from 'zod'

// ============================
// String Schema
// ============================
export const _StringSchema = z
    .string()
    .trim()

export type String = z.infer<typeof _StringSchema>
export const StringSchema = ZodAccelerator.build(_StringSchema)

// ============================
// String Array Schema
// ============================
export const _StringArraySchema = z
    .array(_StringSchema)

export type StringArray = z.infer<typeof _StringArraySchema>
export const StringArraySchema = ZodAccelerator.build(_StringArraySchema)

// ============================
// String Array Non-Empty Schema
// ============================
export const _StringArrayNoNSchema = _StringArraySchema
    .nonempty()

export type StringArrayNoN = z.infer<typeof _StringArrayNoNSchema>
export const StringArrayNoNSchema = ZodAccelerator.build(_StringArrayNoNSchema)

// ============================
// String Non-Empty Schema
// ============================
export const _StringNoNSchema = _StringSchema
    .min(1)

export type StringNoN = z.infer<typeof _StringNoNSchema>
export const StringNoNSchema = ZodAccelerator.build(_StringNoNSchema)

// ============================
// String Non-Empty Array Schema
// ============================
export const _StringNoNArraySchema = z
    .array(_StringNoNSchema)

export type StringNoNArray = z.infer<typeof _StringNoNArraySchema>
export const StringNoNArraySchema = ZodAccelerator.build(_StringNoNArraySchema)

// ============================
// String Non-Empty Array Non-Empty Schema
// ============================
export const _StringNoNArrayNoNSchema = _StringNoNArraySchema
    .nonempty()

export type StringNoNArrayNoN = z.infer<typeof _StringNoNArrayNoNSchema>
export const StringNoNArrayNoNSchema = ZodAccelerator.build(_StringNoNArrayNoNSchema)
