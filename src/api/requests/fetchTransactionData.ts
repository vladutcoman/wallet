import { API_URL } from '@constants/index';
import { ITransactionData } from './types';
import { ApiResponse, apiClient } from '..';

const getWalletData = async (
  address: string,
): Promise<ApiResponse<ITransactionData[]>> => {
  return apiClient.get<ITransactionData[]>(
    `${API_URL}/accounts/${address}/transactions`,
  );
};

export default getWalletData;
