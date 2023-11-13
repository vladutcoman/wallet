import { API_URL } from '@constants/index';
import { TransactionWatcher } from '@multiversx/sdk-core/out';
import {
  ApiNetworkProvider,
  ProxyNetworkProvider,
} from '@multiversx/sdk-network-providers/out';

export const proxyNetworkProvider = new ProxyNetworkProvider(API_URL);
export const apiNetworkProvider = new ApiNetworkProvider(API_URL);

export const getTransactionWatcher = () => {
  return new TransactionWatcher(apiNetworkProvider);
};
