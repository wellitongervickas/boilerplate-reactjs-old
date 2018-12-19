// @flow static
import Axios from 'axios';

type RequestConfig = {
  url: string,
  method: string
};

export default class Middleware {
  static service() {
    const request = Axios.create();

    request.interceptors.request.use((requestConfig) => {
      const requestReturn = { ...requestConfig };

      return requestReturn;
    });

    return request;
  }

  static request(params: RequestConfig) {
    return this.service()[params.method](params);
  }
}
