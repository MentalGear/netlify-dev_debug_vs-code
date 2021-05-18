/**
 * ENV Var Loading, Validation & Definition
 *
 * @export publicEnvVars object
 * @export secretEnvVars object
 * @throw EnvVarError if validation fails
 **/

import * as envVar from 'env-var' // env validation library
import { envLoad } from './envLoader'
// ==== 1. load correct env
envLoad()

// ==== 2. validate env vars and redefine them
// ----------------------------------------------------------------
// PUBLIC ENV VARs
// ----------------------------------------------------------------
export const publicEnvVars = {
  appContext: envVar.get('APP_CONTEXT').required().asString(),
  nodeEnv: envVar.get('NODE_ENV').asString(), // can't be required since AWS lambda functions don't have it
}

// ----------------------------------------------------------------
// SECRET ENV VARs
// for use in backend code
// ----------------------------------------------------------------
export const secretEnvVars = {}
