import { createContext, useContext } from 'react';
import { makeAutoObservable } from 'mobx';

class WalletStore {
  address = '';
  balance = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setWalletData = (address: string, balance: string) => {
    this._setAddress(address);
    this._setBalance(balance);
  };

  private _setAddress = (address: string) => {
    this.address = address;
  };

  private _setBalance = (balance: string) => {
    // TODO: Check the balance if needs processed
    this.balance = Number(balance);
  };
}

export interface IWalletStore {
  walletStore: WalletStore;
}

const defaultStoreContext = {
  walletStore: new WalletStore(),
};

const WalletStoreContext = createContext<IWalletStore>(defaultStoreContext);

export const useWalletStore = () => useContext(WalletStoreContext);
