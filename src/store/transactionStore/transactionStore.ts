import { createContext, useContext } from 'react';
import { makeAutoObservable } from 'mobx';

class TransactionStore {
  amount: number = 0;
  transactionHash = '';
  receiverAddress: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  setTransactionData = (
    amount: number,
    transactionHash: string,
    receiverAddress: string,
  ) => {
    this._setAmount(amount);
    this._setTransactionHash(transactionHash);
    this._setReceiverAddress(receiverAddress);
  };

  _setAmount = (amount: number) => {
    this.amount = amount;
  };

  _setTransactionHash = (transactionHash: string) => {
    this.transactionHash = transactionHash;
  };

  _setReceiverAddress = (receiverAddress: string) => {
    this.receiverAddress = receiverAddress;
  };
}

export interface ITransactionStore {
  transactionStore: TransactionStore;
}

const defaultStoreContext = {
  transactionStore: new TransactionStore(),
};

const transactionStoreContext =
  createContext<ITransactionStore>(defaultStoreContext);

export const useTransactionStore = () => useContext(transactionStoreContext);
