import { createContext, useContext } from 'react';
import { makeAutoObservable } from 'mobx';
import { UserSecretKey } from '@multiversx/sdk-wallet/out';

class WalletStore {
  nonce = 0;
  balance = 0;
  address = '';
  secretKey: UserSecretKey | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setWalletData = (
    nonce: number,
    address: string,
    balance: string,
    secretKey: UserSecretKey,
  ) => {
    this._setNonce(nonce);
    this._setAddress(address);
    this._setBalance(balance);
    this._setSecretKey(secretKey);
  };

  private _setNonce = (nonce: number) => {
    this.nonce = nonce;
  };

  private _setAddress = (address: string) => {
    this.address = address;
  };

  private _setBalance = (balance: string) => {
    this.balance = Number(balance);
  };

  private _setSecretKey = (secretKey: UserSecretKey) => {
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
