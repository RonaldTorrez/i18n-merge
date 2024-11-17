import { z } from 'zod'

export const LoggerTypesColorEnum = z
    .enum([
        'black',
        'red',
        'green',
        'yellow',
        'blue',
        'magenta',
        'cyan',
        'white',
        'blackBright',
        'gray',
        'grey',
        'redBright',
        'greenBright',
        'yellowBright',
        'blueBright',
        'magentaBright',
        'cyanBright',
        'whiteBright',
    ])
