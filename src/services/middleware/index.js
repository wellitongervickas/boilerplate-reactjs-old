// @flow static
import Axios from 'axios';

type RequestConfig = {
  url: string,
  method: string
};

export default class Middleware {
  static service(): any {
    const request = Axios.create();

    request.interceptors.request.use((requestConfig) => {
      const requestReturn = {
        ...requestConfig,
      };

      return requestReturn;
    });

    return request;
  }

  static request(params: RequestConfig): Promise<mixed> {
    return this.service()(params)
      .then((result: any) => result)
      .catch((err: any) => {
        console.error(err, 'services middleware error');
        return err;
      });
  }
}
