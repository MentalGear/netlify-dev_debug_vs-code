module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js',
  },
  moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
  collectCoverage: false, // set on yarn test:units to true
  collectCoverageFrom: [
    '<rootDir>/components/**/*',
    '<rootDir>/pages/**/*',
    '<rootDir>/layouts/**/*',
    '<rootDir>/store/**/*',
    '<rootDir>/serverlessFunctions/**/*',
  ],
  // only .vue files ?
  // collectCoverageFrom: [
  //   '<rootDir>/components/**/*.vue',
  //   '<rootDir>/pages/**/*.vue',
  //   '<rootDir>/layouts/**/*.vue',
  //   '<rootDir>/store/**/*.vue',
  //   '<rootDir>/utils/**/*',
  // ],
}
