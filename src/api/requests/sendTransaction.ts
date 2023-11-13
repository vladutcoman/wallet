import { API_URL } from '@constants/index';
import { ApiResponse, apiClient } from '..';

const sendTransaction = async (data: any): Promise<ApiResponse<any>> => {
  return apiClient.post<any>(`${API_URL}/transactions`, data);
};

export default sendTransaction;
