import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

export interface ApiResponse<T> {
  data: T;
  error: boolean;
}

export class ApiClient {
  private client = axios.create({
    headers: {
      Accept: 'application/json',
    },
  });

  private handleSuccess<T>(
    response: AxiosResponse<ApiResponse<T>>,
  ): ApiResponse<T> {
    return { data: response.data as T, error: false };
  }

  private handleError<T>(error: AxiosError): ApiResponse<T> {
    /**
     * TODO: Handle errors - remove the whole error from log
     */
    console.error('API request failed: ', error.toJSON());
    return { data: {} as T, error: true };
  }

  private async request<T>(
    config: AxiosRequestConfig,
  ): Promise<ApiResponse<T>> {
    try {
      const response = await this.client.request<ApiResponse<T>>(config);
      return this.handleSuccess(response);
    } catch (error) {
      return this.handleError(error as AxiosError);
    }
  }

  get<T>(
    url: string,
    params?: AxiosRequestConfig['params'],
  ): Promise<ApiResponse<T>> {
    return this.request<T>({ method: 'get', url, params });
  }

  post<T>(url: string, data?: unknown): Promise<ApiResponse<T>> {
    return this.request<T>({ method: 'post', url, data });
  }
}

export default ApiClient;
