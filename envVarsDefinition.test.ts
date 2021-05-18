/**
 * Test for checking if env vars are all correct
 * Doing these as a test instead of app initialization (index.js)
 * so CI pipeline can fail with a specifc error
 *
 * @returns error if incorrect
 **/

process.env.APP_CONTEXT = 'development'

// eslint-disable-next-line import/first
import * as envVars from '~/envVarsDefinition'

describe('env vars correctly set', () => {
  test('should succeed if all needed env vars are present & have correct types', () => {
    // An EnvVarError will be thrown if the variable is not correct
    expect(typeof envVars).toBe('object')
  })
  // can't have fail test, since no input for function as env defined elsewhere
})
