class Request {
    baseUrl: string;
    options: RequestInit;

    constructor(baseUrl: string, options: RequestInit) {
        this.options = options;
        this.baseUrl = baseUrl;
    }

    async get(path: string, options?: RequestInit) {
        if (options) {
            this.options = { ...this.options, ...options };
        }

        return await this.makeRequest(`${this.baseUrl}/${path}`, 'get');
    }

    async post(path, body, options?: RequestInit) {
        if (options) {
            this.options = { ...this.options, ...options };
        }

        return await this.makeRequest(`${this.baseUrl}/${path}`, 'post', body);
    }

    private async makeRequest<T>(path: string, method: string, body?: BodyInit): Promise<T> {
        method = method.toLowerCase();

        const requestOptions = {
            method,
            ...this.options,
        };

        if (method === 'post' || method === 'patch' || method === 'put') {
            requestOptions.body = body ? JSON.stringify(body) : null;
        }

        try {
            const response = await fetch(path, requestOptions);

            //TODO error interceptors
            if (!response.ok) {
                const errorObject = {
                    status: response.status,
                    statusText: response.statusText,
                    url: response.url,
                    ok: response.ok,
                };

                return Promise.reject(errorObject);
            } else {
                return response.json();
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export default Request;
