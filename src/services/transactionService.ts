import { UserSecretKey, UserSigner } from '@multiversx/sdk-wallet/out';
import {
  Account,
  TokenTransfer,
  Transaction,
  TransactionPayload,
} from '@multiversx/sdk-core/out';

import { proxyNetworkProvider } from './networkProvidersService';
import { MOCK_RECEIVER } from '@constants/index';

export const brodcastTransaction = async (
  nonce: number,
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
      nonce,
    );
    let txHash = await proxyNetworkProvider.sendTransaction(tx);

    return txHash;
  } catch (error) {
    console.error('Could not broadcast transaction');
    return '';
  }
};

export const getSignature = async (
  nonce: number,
  senderAddress: string,
  value: number,
  secretKey: UserSecretKey,
) => {
  try {
    const sender = new Account({ bech32: () => senderAddress });
    const receiver = new Account({ bech32: () => MOCK_RECEIVER });

    const tx = await buildTransaction(
      sender,
      receiver,
      value,
      secretKey as UserSecretKey,
      nonce,
    );

    return tx.getSignature().toString('hex');
  } catch (error) {
    console.error('Could not get signature');
    return '';
  }
};

const buildTransaction = async (
  sender: Account,
  receiver: Account,
  value: number,
  secretKey: UserSecretKey,
  nonce: number,
) => {
  const tx = new Transaction({
    data: new TransactionPayload(''),
    gasLimit: 70000,
    sender: sender.address,
    receiver: receiver.address,
    value: TokenTransfer.egldFromAmount(value),
    chainID: 'T',
  });

  tx.setNonce(nonce);
  signTransaction(tx, secretKey);

  return tx;
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
