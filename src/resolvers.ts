import { v4 as uuidv4} from 'uuid';
import { IResolvers } from 'apollo-server';
import { Transaction, TransactionInput } from './types';

export const resolvers: IResolvers = {
    Query: {
        getTransactions: (parent, args, {transactions}: { transactions: Array<Transaction> }): Array<Transaction> => transactions,
        getExpenses: (parent, args, {transactions}: { transactions: Array<Transaction> }): number => {
            return transactions.reduce((accu: number, item: Transaction) => {
                if (item.amount < 0) {
                    return accu += item.amount;
                }
                return accu;
            }, 0);
        },
        getIncome: (parent, args, {transactions}: { transactions: Array<Transaction> }): number => {
            return transactions.reduce((accu: number, item: Transaction) => {
                if (item.amount > 0) {
                    return accu += item.amount;
                }
                return accu;
            }, 0);
        },
        getBalance: (parent, args, {transactions}: { transactions: Array<Transaction> }): number => {
            return transactions.reduce((accu: number, item: Transaction) => {
                return accu += item.amount;
            }, 0);
        }
    },
    Mutation: {
        addTransaction: (parent, {transaction}: {transaction: TransactionInput}, {transactions}: { transactions: Array<Transaction> }): Transaction => {
            const newTransaction = { ...transaction, id: uuidv4() };
            transactions.push(newTransaction);
            return newTransaction;
        },
        deleteTransaction: (parent, {id}: {id: string}, {transactions}: { transactions: Array<Transaction> }): boolean => {
            const index = transactions.findIndex((transaction: Transaction) => transaction.id === id);
            const deletedTransaction = transactions.splice(index, 1);
            return deletedTransaction.length > 0;
        }
    }
};