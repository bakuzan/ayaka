module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  modulePathIgnorePatterns: ['__tests__/utils/', 'build/'],
  coveragePathIgnorePatterns: ['__tests__/utils/', 'build/'],
  moduleFileExtensions: ['js', 'json', 'ts'],
  moduleDirectories: [__dirname, 'lib', 'node_modules'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  transformIgnorePatterns: ['/node_modules/', 'build/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/lib/$1'
  }
};
