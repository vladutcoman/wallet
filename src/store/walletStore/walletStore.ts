import { createContext, useContext } from 'react';
import { makeAutoObservable } from 'mobx';
import { UserSecretKey } from '@multiversx/sdk-wallet/out';

class WalletStore {
  address = '';
  balance = 0;
  secretKey: UserSecretKey | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setWalletData = (
    address: string,
    balance: string,
    secretKey: UserSecretKey,
  ) => {
    this._setAddress(address);
    this._setBalance(balance);
    this.setSecretKey(secretKey);
  };

  private _setAddress = (address: string) => {
    this.address = address;
  };

  private _setBalance = (balance: string) => {
    this.balance = Number(balance);
  };

  setSecretKey = (secretKey: UserSecretKey) => {
    this.secretKey = secretKey;
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
