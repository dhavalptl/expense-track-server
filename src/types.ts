export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
   __typename?: 'Mutation';
  addTransaction: Transaction;
  deleteTransaction: Scalars['Boolean'];
};


export type MutationAddTransactionArgs = {
  transaction?: Maybe<TransactionInput>;
};


export type MutationDeleteTransactionArgs = {
  id: Scalars['String'];
};

export type Query = {
   __typename?: 'Query';
  getTransactions: Array<Transaction>;
  getExpenses: Scalars['Float'];
  getIncome: Scalars['Float'];
  getBalance: Scalars['Float'];
};

export type Transaction = {
   __typename?: 'Transaction';
  id: Scalars['ID'];
  description: Scalars['String'];
  amount: Scalars['Float'];
  createdOn: Scalars['String'];
};

export type TransactionInput = {
  description: Scalars['String'];
  amount: Scalars['Float'];
  createdOn: Scalars['String'];
};
