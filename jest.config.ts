import { pathsToModuleNameMapper } from 'ts-jest/utils'
import { compilerOptions } from './tsconfig.json'

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/test'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  setupFiles: ['jest-plugin-context/setup', '<rootDir>/test/setup.ts'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/test',
  }),
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ['!<rootDir>/.github/**', '!<rootDir>/node_modules/**', '!<rootDir>/coverage/**', '!**/*.js'],
  coverageThreshold: {
    global: {
      lines: 80,
      branches: 80,
      functions: 80,
      statements: 80,
    },
  },
}
