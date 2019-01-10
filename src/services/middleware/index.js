// @flow static
import Axios from 'axios';
import { RequestConfig } from './interface';

export default class Middleware {
  static service(): any {
    const request = Axios.create();

    request.interceptors.request.use((requestConfig) => {
      const requestReturn = {
        ...requestConfig,
      };

      // Create your service configurations before request
      return requestReturn;
    });

    return request;
  }

  static request(params: RequestConfig): Promise<mixed> {
    return this.service()(params)
      .then((result: any) => result)
      .catch((err: any) => err);
  }
}
