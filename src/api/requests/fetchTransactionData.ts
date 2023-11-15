import { API_URL } from '@constants/index';
import { ITransactionData } from './types';
import apiClient, { ApiResponse } from '@api/ApiClient';

const fetchTransactionData = async (
  address: string,
): Promise<ApiResponse<ITransactionData[]>> => {
  return apiClient.get<ITransactionData[]>(
    `${API_URL}/accounts/${address}/transactions`,
    { size: 10 },
  );
};

export default fetchTransactionData;
