import sendTransaction from '@api/requests/sendTransaction';
import {
  Account,
  TokenTransfer,
  Transaction,
  TransactionPayload,
} from '@multiversx/sdk-core/out';
import {
  Mnemonic,
  UserSecretKey,
  UserSigner,
  UserWallet,
} from '@multiversx/sdk-wallet/out';

export const getAddressFromMnemonic = (mnemonic: string) => {
  let address = '';
  let secretKey: UserSecretKey | null = null;

  try {
    const mnemonicObj = Mnemonic.fromString(mnemonic);
    const password = '';
    const addressIndex = 0;

    secretKey = mnemonicObj.deriveKey(addressIndex);

    console.log({ secretKey });

    const userWallet = UserWallet.fromSecretKey({ secretKey, password });

    console.log({ userWallet: userWallet.toJSON() });

    address = userWallet.toJSON().bech32;
  } catch (error) {
    console.log(error);
  }

  return { address, secretKey };
};

export const formatBalance = (balance: number) => {
  // TODO: format balance correctly
  return `${balance} XeGLD`;
};

export const startTransaction = async (
  senderAddress: string,
  receiverAddress: string,
  value: number,
  secretKey: UserSecretKey,
) => {
  // TODO: FIX ERROR

  const sender = new Account({ bech32: () => senderAddress });
  const receiver = new Account({ bech32: () => receiverAddress });

  const tx = new Transaction({
    data: new TransactionPayload('helloWorld'),
    gasLimit: 70000,
    sender: sender.address,
    receiver: receiver.address,
    value: TokenTransfer.egldFromAmount(1),
    chainID: 'D',
  });

  const signer = new UserSigner(secretKey);
  const serializedTransaction = tx.serializeForSigning();
  const transactionSignature = await signer.sign(serializedTransaction);
  tx.applySignature(transactionSignature);

  const sendableData = tx.toSendable();

  console.log({ sendableData });

  const response = await sendTransaction(sendableData);

  console.log(response);
};
