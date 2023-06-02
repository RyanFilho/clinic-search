import axios, { AxiosResponse } from 'axios';

export class HttpClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public async get<T>(endpoint: string): Promise<T> {
    const url = `${this.baseUrl}/${endpoint}`;

    try {
      const response: AxiosResponse<T> = await axios.get(url);
      return response.data;
    } catch (error) {
      // Handle error appropriately (e.g., log, throw, etc.)
      throw new Error(`GET request to ${url} failed: ${error.message}`);
    }
  }
}
