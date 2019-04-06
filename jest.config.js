module.exports = {
  roots: ['<rootDir>/src'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/testUtils/setup.ts'],
  moduleNameMapper: {
    '^@/(.+)': '<rootDir>/src/$1',
  },
};
