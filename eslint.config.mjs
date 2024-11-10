import { includeIgnoreFile } from '@eslint/compat'
import pluginJs from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import jest from 'eslint-plugin-jest'
import jestExtended from 'eslint-plugin-jest-extended'
import oxlint from 'eslint-plugin-oxlint'
import perfectionist from 'eslint-plugin-perfectionist'
import unicorn from 'eslint-plugin-unicorn'
import globals from 'globals'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import tseslint from 'typescript-eslint'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const pathResolve = (...paths) => path.resolve(__dirname, ...paths)

export default [
    includeIgnoreFile(pathResolve('.gitignore')),
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    unicorn.configs['flat/all'],
    perfectionist.configs['recommended-natural'],
    stylistic.configs.customize({ indent: 4 }),
    { files: [ '**/*.{js,mjs,cjs,ts,jsx,tsx}' ] },
    { languageOptions: { globals: globals.node } },
    { ignores: [ 'languages/**/*' ] },
    {
        files: [ '__test__/**/*' ],
        ...jest.configs['flat/recommended'],
        ...jestExtended.configs['flat/all'],
    },
    {
        rules: {
            '@stylistic/array-bracket-spacing': [
                'error',
                'always',
                { arraysInArrays: false, objectsInArrays: false },
            ],
            '@stylistic/array-element-newline': [
                'error',
                { consistent: true, multiline: true },
            ],
            '@stylistic/dot-location': [
                'error', 'property',
            ],
            '@stylistic/padding-line-between-statements': [
                'error',
                { blankLine: 'always', next: 'return', prev: '*' },
                { blankLine: 'always', next: '*', prev: 'if' },
                { blankLine: 'always', next: '*', prev: [ 'const', 'let', 'var' ] },
                { blankLine: 'any', next: [ 'const', 'let', 'var' ], prev: [ 'const', 'let', 'var' ] },
            ],
            '@typescript-eslint/ban-ts-comment': 'off',
            '@typescript-eslint/no-unused-vars': 'off',
        },
    },

    oxlint.configs['flat/recommended'],
]
