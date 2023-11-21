import { NativeAuthClient } from '@multiversx/sdk-native-auth-client';
import {
  Mnemonic,
  UserSecretKey,
  UserWallet,
} from '@multiversx/sdk-wallet/out';

import { API_URL } from '@constants/index';

export const getAccountData = (mnemonic: string) => {
  let address = '';
  let secretKey: UserSecretKey | null = null;

  try {
    secretKey = getSecretKey(mnemonic);
    const userWallet = UserWallet.fromSecretKey({ secretKey, password: '' });
    address = userWallet.toJSON().bech32;
  } catch (error) {
    console.error(error);
  }

  return { address, secretKey };
};

export const getAuthToken = async (address: string) => {
  try {
    const client = new NativeAuthClient();
    const init = await client.initialize({ apiUrl: API_URL });
    const signableMessage = init.split('.').slice(1).join('.');

    /**
     * TODO: sign the signableMessage ???
     */
    const signature = signableMessage;
    const accessToken = client.getToken(address, init, signature);

    return accessToken;
  } catch (error) {
    console.log({ error });
    return '';
  }
};

const getSecretKey = (mnemonic: string) => {
  const mnemonicObj = Mnemonic.fromString(mnemonic);
  const addressIndex = 0;

  return mnemonicObj.deriveKey(addressIndex);
};
