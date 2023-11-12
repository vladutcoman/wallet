import { API_URL } from '@constants/index';
import { ApiResponse, apiClient } from '..';
import { IWalletData } from './types';

const getWalletData = async (
  address: string,
): Promise<ApiResponse<IWalletData>> => {
  return apiClient.get<IWalletData>(`${API_URL}/accounts/${address}`);
};

export default getWalletData;
