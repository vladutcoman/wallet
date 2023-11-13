import apiClient, { ApiResponse } from '@api/ApiClient';
import { API_URL } from '@constants/index';

const sendTransaction = async (data: any): Promise<ApiResponse<any>> => {
  return apiClient.post<any>(`${API_URL}/transactions`, data);
};

export default sendTransaction;
