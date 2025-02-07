import { createDefaultPreset, JestConfigWithTsJest, pathsToModuleNameMapper } from 'ts-jest'

import { compilerOptions } from './tsconfig.json'

const jestConfig: JestConfigWithTsJest = {
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
    modulePaths: [ compilerOptions.baseUrl ],
    setupFilesAfterEnv: [
        'jest-chain',
        'jest-extended/all',
    ],
    verbose: true,
    ...createDefaultPreset(),
}

export default jestConfig
