import { ApolloServer } from 'apollo-server';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';
import { Transaction } from './types';

export interface Context {
    transactions: Array<Transaction>
}

const transactionsData: Array<Transaction> = [];

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: (): Context => {
      return {
        transactions: transactionsData
      }
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
