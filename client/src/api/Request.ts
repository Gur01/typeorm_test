class Request {
    baseUrl: string;
    options: RequestInit;

    constructor(baseUrl: string, options: RequestInit) {
        this.options = options;
        this.baseUrl = baseUrl;
    }

    async get<T>(path: string, options?: RequestInit): Promise<T> {
        if (options) {
            this.options = { ...this.options, ...options };
        }

        try {
            const request = await this.makeRequest(`${this.baseUrl}/${path}`, 'get');
            return JSON.parse(request);
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

    // private async parseData(method: string, data: string) {
    //     switch (method) {
    //         case 'post':
    //             data = JSON.stringify(data);
    //             break;
    //         // case 'get':
    //         //     data = qs.stringify(data, { arrayFormat: 'repeat' });
    //         //     break;
    //         default:
    //             data = JSON.stringify(data);
    //     }
    //     return data;
    // }

    private async makeRequest(path: string, method: string, body?: BodyInit): Promise<string> {
        method = method.toLowerCase();

        try {
            const request = await fetch(path, {
                method,
                ...this.options,
                body,
            });
            return request.json();
        } catch (error) {
            throw new Error(error);
        }
    }
}

export default Request;
