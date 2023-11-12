import { Mnemonic, UserWallet } from '@multiversx/sdk-wallet/out';

export const getAddressFromMnemonic = (mnemonic: string) => {
  let address = '';
  try {
    const mnemonicObj = Mnemonic.fromString(mnemonic);
    const password = '';
    const addressIndex = 0;

    const secretKey = mnemonicObj.deriveKey(addressIndex);
    const userWallet = UserWallet.fromSecretKey({ secretKey, password });

    address = userWallet.toJSON().bech32;
  } catch (error) {
    console.log(error);
  }
  return address;
};
