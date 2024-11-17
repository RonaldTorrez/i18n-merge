import { z } from 'zod'

export const LogLevelEnum = z
    .enum([
        'debug',
        'error',
        'info',
    ])
