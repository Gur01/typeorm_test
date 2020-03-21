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

        try {
            const request = await this.makeRequest(`${this.baseUrl}/${path}`, 'get');

            return request;
        } catch (error) {
            throw new Error(error);
        }
    }

    async post(path, body, options?: RequestInit) {
        if (options) {
            this.options = { ...this.options, ...options };
        }
        try {
            const request = await this.makeRequest(`${this.baseUrl}/${path}`, 'post', body);

            return request;
        } catch (error) {
            throw new Error(error);
        }
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
            const request = await fetch(path, requestOptions);

            return request.json();
        } catch (error) {
            throw new Error(error);
        }
    }
}

export default Request;
