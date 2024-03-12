enum METHOD {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

type Options = {
  method: METHOD;
  data?: any;
};

type OptionsWithoutMethod = Omit<Options, "method">;

class HTTPTransport {
  get(
    url: string,
    options: OptionsWithoutMethod = {}
  ): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: METHOD.GET });
  }

  request(
    url: string,
    options: Options = { method: METHOD.GET }
  ): Promise<XMLHttpRequest> {
    const { method, data } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);

      xhr.addEventListener("load", function () {
        resolve(xhr);
      });

      xhr.addEventListener("abort", reject);
      xhr.addEventListener("onerror", reject);
      xhr.ontimeout = reject;

      if (method === METHOD.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  }
}
