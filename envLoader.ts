/**
 * Loads the correct env vars
 * based on APP_CONTEXT set via package.json or netlify.toml (backend functions)
 *
 * @param process.env.APP_CONTEXT set via package.json
 * @throw Error
 */

import dotenv from 'dotenv'

export function envLoad(): void {
  let envFilename = 'development'

  const appContext: string | undefined = process.env.APP_CONTEXT
  // console.log('appContext', appContext)

  if (!appContext)
    // same as (appContext == null)
    throw new ReferenceError('process.env.APP_CONTEXT is not defined')
  if (appContext === 'production') return // dont load for production as pro. env is stored on deployment UI
  if (appContext === 'stage') envFilename = 'stage'
  // appContext=test.. use development env by default
  // if (appContext.includes('test')) envFilename = 'development' // ensures that appContext=test:integrations sources development env

  // load env from file into node's process.env
  const envParseResult: any = dotenv.config({ path: '.env.' + envFilename })
  if (envParseResult.error) {
    throw envParseResult.error
  }
  // console.log('new process.env with added env from file', process.env)
}
