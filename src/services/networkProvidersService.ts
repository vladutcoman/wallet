import { TransactionWatcher } from '@multiversx/sdk-core/out';
import {
  ApiNetworkProvider,
  ProxyNetworkProvider,
} from '@multiversx/sdk-network-providers/out';

import { API_URL } from '@constants/index';

export const proxyNetworkProvider = new ProxyNetworkProvider(API_URL);
export const apiNetworkProvider = new ApiNetworkProvider(API_URL);

export const getTransactionWatcher = () => {
  return new TransactionWatcher(apiNetworkProvider);
};
