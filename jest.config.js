module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  modulePathIgnorePatterns: ['__tests__/utils/'],
  coveragePathIgnorePatterns: ['__tests__/utils/'],
  moduleFileExtensions: ['js', 'json', 'ts'],
  moduleDirectories: ['.', 'lib', 'node_modules'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  transformIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/lib/$1'
  }
};
