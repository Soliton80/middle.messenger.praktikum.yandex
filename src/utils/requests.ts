/* eslint-disable no-shadow */
enum HttpRequestMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

type Options = {
  method: HttpRequestMethods;
  data?: any;
};

type OptionsWithoutMethod = Omit<Options, 'method'>;

export default class HTTPTransport {
  get(
    url: string,
    options: OptionsWithoutMethod = {},
  ): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: HttpRequestMethods.GET });
  }

  request(
    url: string,
    options: Options = { method: HttpRequestMethods.GET },
  ): Promise<XMLHttpRequest> {
    const { method, data } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);

      xhr.addEventListener('load', () => {
        resolve(xhr);
      });

      xhr.addEventListener('abort', reject);
      xhr.addEventListener('onerror', reject);
      xhr.ontimeout = reject;

      if (method === HttpRequestMethods.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  }
}
