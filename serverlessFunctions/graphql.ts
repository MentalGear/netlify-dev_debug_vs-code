import 'reflect-metadata'
import { buildSchema } from 'type-graphql'
import { ApolloServer } from 'apollo-server-lambda'

import { RecipeResolver } from './recipe-examples/recipe-resolver'

async function lambdaFunction() {
  let ctx = process.env.CONTEXT
  console.log('ctx', ctx)

  const schema = await buildSchema({
    resolvers: [RecipeResolver],
  })

  // const formatError = function (err: Error) {
  //   // Don't give the specific errors to the client.
  //   if (err.message.startsWith('Database Error: ')) {3
  //     return new Error('Internal server error')
  //   }
  //   // Otherwise return the original error. The error can also
  //   // be manipulated in other ways, as long as it's returned.
  //   return err
  // }

  const server = new ApolloServer({
    // typeDefs,
    // resolvers,
    schema,
    playground: true,
    // formatError,
  })

  // !!! NOTE: return (await) server.createHandler() won't work !
  exports.handler = server.createHandler()
}

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!! NOTE: weird but only way to make it work with
// AWS lambda and netlify functions (netlify dev)
// also needs a reload of the page (first load of playground won't work)
lambdaFunction()
// exports.handler = lambdaFunction wont work
// export { lambdaFunction as handler } wont work
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
