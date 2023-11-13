import {
  Account,
  TokenTransfer,
  Transaction,
  TransactionPayload,
} from '@multiversx/sdk-core/out';
import { UserSecretKey, UserSigner } from '@multiversx/sdk-wallet/out';
import { proxyNetworkProvider } from './networkProvidersService';

export const brodcastTransaction = async (
  senderAddress: string,
  receiverAddress: string,
  value: number,
  secretKey: UserSecretKey,
) => {
  try {
    const sender = new Account({ bech32: () => senderAddress });
    const receiver = new Account({ bech32: () => receiverAddress });

    const tx = await buildTransaction(
      sender,
      receiver,
      value,
      secretKey as UserSecretKey,
    );
    let txHash = await proxyNetworkProvider.sendTransaction(tx);

    return txHash;
  } catch (error) {
    console.error('Could not broadcast transaction');
    return '';
  }
};

const buildTransaction = async (
  sender: Account,
  receiver: Account,
  value: number,
  secretKey: UserSecretKey,
) => {
  const tx = new Transaction({
    data: new TransactionPayload(''),
    gasLimit: 70000,
    sender: sender.address,
    receiver: receiver.address,
    value: TokenTransfer.egldFromAmount(value),
    chainID: 'T',
  });

  setNonce(sender, tx);
  signTransaction(tx, secretKey);

  return tx;
};

const setNonce = (sender: Account, tx: Transaction) => {
  /**
   * This is a hack to prevent this error:
   * "invalid transaction lowerNonceInTx: true, veryHighNonceInTx: false"
   */
  sender.getNonceThenIncrement();
  sender.getNonceThenIncrement();
  sender.getNonceThenIncrement();
  sender.getNonceThenIncrement();
  sender.getNonceThenIncrement();
  sender.getNonceThenIncrement();
  sender.getNonceThenIncrement();
  tx.setNonce(sender.nonce);
};

const signTransaction = async (tx: Transaction, secretKey: UserSecretKey) => {
  try {
    const signer = new UserSigner(secretKey);
    const serializedTransaction = tx.serializeForSigning();
    const transactionSignature = await signer.sign(serializedTransaction);
    tx.applySignature(transactionSignature);
  } catch (error) {
    console.log('Could not sign transaction');
  }
};
