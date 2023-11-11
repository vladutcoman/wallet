import { Mnemonic, UserWallet } from '@multiversx/sdk-wallet/out';
import axios from 'axios';
import { useCallback, useState } from 'react';

export enum ImportingWalletStatus {
  NONE,
  DONE,
  LOADING,
  ERROR,
}

const URL = 'https://testnet-api.multiversx.com/accounts/';

const useImportingWallet = () => {
  const [status, setStatus] = useState(ImportingWalletStatus.NONE);

  const getAddressFromMnemonic = useCallback((mnemonic: string) => {
    const mnemonicObj = Mnemonic.fromString(mnemonic);
    const password = '';
    const addressIndex = 0;

    const secretKey = mnemonicObj.deriveKey(addressIndex);
    const userWallet = UserWallet.fromSecretKey({ secretKey, password });

    return userWallet.toJSON().bech32;
  }, []);

  const fetchWalletData = useCallback(
    async (mnemonic: string) => {
      setStatus(ImportingWalletStatus.LOADING);
      const address = getAddressFromMnemonic(mnemonic);
      const apiUrl = `${URL}${address}`;

      const walletData = await axios.get(apiUrl, {
        headers: {
          Accept: 'application/json',
        },
      });

      console.log({ walletData });
      setStatus(ImportingWalletStatus.DONE);
    },
    [getAddressFromMnemonic],
  );

  return { status, fetchWalletData };
};

export default useImportingWallet;
