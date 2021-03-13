import { ApolloServer } from 'apollo-server'
import { typeDefs, resolvers } from './schema'
import { createContext } from './context'

new ApolloServer({ typeDefs, resolvers, context: createContext }).listen(
  { port: 4000 },
  () =>
    console.log(
      `Server ready at: http://localhost:4000`,
    ),
)
