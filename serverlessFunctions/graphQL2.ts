// FIXME: This example code breaks Netlify functions.
// When run from the shell with netlify dev command, erros are shown
// When run from vs code the `debug console` shows no errors

import 'reflect-metadata'

import { buildSchema } from 'type-graphql'
import { ApolloServer } from 'apollo-server-lambda'

import { RecipeResolver } from './recipe-examples/recipe-resolver'

async function getServer():Promise {
  // let ctx = process.env.CONTEXT
  // console.log('ctx', ctx)

  const schema = await buildSchema({
    // resolvers: [gpt3QueryResolver],

    resolvers: [RecipeResolver],
  })

  const server = new ApolloServer({
    // typeDefs,
    // resolvers,
    schema,
    playground: true,
    // formatError: globalErrorHandler,
  })

  return server
}

const handler = async (event, ctx, callback) {
  return getServer()
    .then((server) =>
      server
        .createHandler()
    )
    .then((handler) => handler(event, ctx, callback))
}
