import {
  Mnemonic,
  UserSecretKey,
  UserWallet,
} from '@multiversx/sdk-wallet/out';

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

const getSecretKey = (mnemonic: string) => {
  const mnemonicObj = Mnemonic.fromString(mnemonic);
  const addressIndex = 0;

  return mnemonicObj.deriveKey(addressIndex);
};
