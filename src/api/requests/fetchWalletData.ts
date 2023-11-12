import { API_URL } from '@constants/index';
import apiClient from '..';
import { IWalletData } from './types';
import { ApiResponse } from '@api/ApiClient';

const getWalletData = async (
  address: string,
): Promise<ApiResponse<IWalletData>> => {
  return apiClient.get<IWalletData>(`${API_URL}/accounts/${address}`);
};

export default getWalletData;
