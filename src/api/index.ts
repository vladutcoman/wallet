export { default as apiClient } from './ApiClient';
export { default as fetchWalletData } from './requests/fetchWalletData';
export { default as fetchTransactionData } from './requests/fetchTransactionData';

export interface ApiResponse<T> {
  data: T;
  error: boolean;
}
