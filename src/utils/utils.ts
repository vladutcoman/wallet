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
import { ProxyNetworkProvider } from '@multiversx/sdk-network-providers';

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

  const from = 'erd1pn4rrukxqel08j9cxwe8nru0uaplyncljq7pc8dr5eyga4amty7qh9c830';
  const to = 'erd1lmpz7twjnp76h0ac9czqj4dxxx7qmr3w263ljddh34yvjl62t8mq909vnt';
  const mnemonic =
    'episode truly clinic creek rural industry orient uphold memory cradle praise history used pudding inject wire slush like van valve sister review view syrup';

  const sender = new Account({ bech32: () => from });
  const receiver = new Account({ bech32: () => to });

  const mnemonicObj = Mnemonic.fromString(mnemonic);
  const addressIndex = 0;

  const mockSecretKey = mnemonicObj.deriveKey(addressIndex);

  console.log({ firstNonce: sender.nonce });
  sender.getNonceThenIncrement();
  sender.getNonceThenIncrement();
  sender.getNonceThenIncrement();
  sender.getNonceThenIncrement();
  sender.getNonceThenIncrement();

  const tx = new Transaction({
    data: new TransactionPayload(''),
    gasLimit: 70000,
    sender: sender.address,
    receiver: receiver.address,
    value: TokenTransfer.egldFromAmount(1),
    chainID: 'T',
  });

  console.log({ secondNonce: sender.nonce });
  tx.setNonce(sender.nonce);

  const signer = new UserSigner(mockSecretKey);
  const serializedTransaction = tx.serializeForSigning();
  const transactionSignature = await signer.sign(serializedTransaction);
  tx.applySignature(transactionSignature);

  console.log({ tx });

  const proxyNetworkProvider = new ProxyNetworkProvider(
    'https://testnet-api.multiversx.com',
  );

  try {
    let txHash = await proxyNetworkProvider.sendTransaction(tx);
    console.log({ txHash });
  } catch (error) {
    console.log({ error });
  }

  // const sendableData = tx.toSendable();
  // console.log({ sendableData });
  // const response = await sendTransaction(sendableData);

  // console.log(response);
};

// const interceptor = {
//   config: {
//     adapter: ['xhr', 'http'],
//     data: {
//       chainID: 'D',
//       data: undefined,
//       gasLimit: 70000,
//       gasPrice: 1000000000,
//       guardian: undefined,
//       guardianSignature: undefined,
//       nonce: 0,
//       options: undefined,
//       receiver:
//         'erd1lmpz7twjnp76h0ac9czqj4dxxx7qmr3w263ljddh34yvjl62t8mq909vnt',
//       receiverUsername: undefined,
//       sender: 'erd1pn4rrukxqel08j9cxwe8nru0uaplyncljq7pc8dr5eyga4amty7qh9c830',
//       senderUsername: undefined,
//       signature:
//         'cc4e9ceb75f3f3a59238cb1258b8dabca10a006052196029d9d13066eec34f1b2a13533f93867bc834707609c0b04e7e3170935f9924c5802a1ae959a3a02d01',
//       value: '1000000000000000000',
//       version: 1,
//     },
//     env: { Blob: [], FormData: [] },
//     headers: [Object],
//     maxBodyLength: -1,
//     maxContentLength: -1,
//     method: 'post',
//     timeout: 0,
//     transformRequest: [],
//     transformResponse: [],
//     transitional: {
//       clarifyTimeoutError: false,
//       forcedJSONParsing: true,
//       silentJSONParsing: true,
//     },
//     url: 'https://testnet-api.multiversx.com/transactions',
//     validateStatus: [],
//     xsrfCookieName: 'XSRF-TOKEN',
//     xsrfHeaderName: 'X-XSRF-TOKEN',
//   },
// };

// const data = {
//   sendableData: {
//     chainID: 'D',
//     data: 'aGVsbG9Xb3JsZA==',
//     gasLimit: 70000,
//     gasPrice: 1000000000,
//     guardian: undefined,
//     guardianSignature: undefined,
//     nonce: 0,
//     options: undefined,
//     receiver: 'erd1lmpz7twjnp76h0ac9czqj4dxxx7qmr3w263ljddh34yvjl62t8mq909vnt',
//     receiverUsername: undefined,
//     sender: 'erd1pn4rrukxqel08j9cxwe8nru0uaplyncljq7pc8dr5eyga4amty7qh9c830',
//     senderUsername: undefined,
//     signature:
//       'ff30659b698979fe4f0872a5cf0808e2692df3b09a9dd6dcf5b1775752460ebbdacc011430ac35cd3f7e5aa49deaebbfe3347b81406a5b88d61f7e0d31a9c20f',
//     value: '1000000000000000000',
//     version: 1,
//   },
// };

// const api = {"code": "ERR_BAD_REQUEST",
// "columnNumber": undefined,
// "config": {"adapter": ["xhr",
// "http"],
// "env": {"Blob": [Function Blob],
// "FormData": [Function FormData]},
// "headers": [Object],
// "maxBodyLength": -1,
// "maxContentLength": -1,
// "method": "get",
// "params": {"chainID": "D",
// "gasLimit": 70000,
// "gasPrice": 1000000000,
// "nonce": 0,
// "receiver": "erd1lmpz7twjnp76h0ac9czqj4dxxx7qmr3w263ljddh34yvjl62t8mq909vnt",
// "sender": "erd1pn4rrukxqel08j9cxwe8nru0uaplyncljq7pc8dr5eyga4amty7qh9c830",
// "signature": "cc4e9ceb75f3f3a59238cb1258b8dabca10a006052196029d9d13066eec34f1b2a13533f93867bc834707609c0b04e7e3170935f9924c5802a1ae959a3a02d01",
// "value": "1000000000000000000",
// "version": 1},
// "timeout": 0,
// "transformRequest": [[Function transformRequest]],
// "transformResponse": [[Function transformResponse]],
// "transitional": {"clarifyTimeoutError": false,
// "forcedJSONParsing": true,
// "silentJSONParsing": true},
// "url": "https://testnet-api.multiversx.com/accounts/transactions",
// "validateStatus": [Function validateStatus],
// "xsrfCookieName": "XSRF-TOKEN",
// "xsrfHeaderName": "X-XSRF-TOKEN"},
// "description": undefined,
// "fileName": undefined,
// "lineNumber": undefined, "message": "Request failed with status code 400", "name": "AxiosError", "number": undefined, "stack": "AxiosError: Request failed with status code 400"}
