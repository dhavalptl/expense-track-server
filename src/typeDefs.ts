import { gql } from 'apollo-server';

// Construct a schema, using GraphQL schema language
export const typeDefs = gql`
  type Transaction {
    id: ID!
    description: String!
    amount: Float!
    createdOn: String!
  }
  input TransactionInput {
    description: String!
    amount: Float!
    createdOn: String!
  }
  type Query {
    getTransactions: [Transaction!]!
    getExpenses: Float!
    getIncome: Float!
    getBalance: Float!
  }
  type Mutation {
    addTransaction(transaction: TransactionInput): Transaction!
    deleteTransaction(id: String!): Boolean!
  }
`;