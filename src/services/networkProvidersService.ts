import { API_URL } from '@constants/index';
import {
  ApiNetworkProvider,
  ProxyNetworkProvider,
} from '@multiversx/sdk-network-providers/out';

export const proxyNetworkProvider = new ProxyNetworkProvider(API_URL);
export const apiNetworkProvider = new ApiNetworkProvider(API_URL);
