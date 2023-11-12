import { API_URL } from '@constants/index';
import { ApiResponse, apiClient } from '..';

const sendTransaction = async (data: any): Promise<ApiResponse<any>> => {
  return apiClient.get<any>(`${API_URL}/accounts/transactions`, data);
};

export default sendTransaction;
