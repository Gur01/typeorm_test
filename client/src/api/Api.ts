export default class Api {
    request: any;
    constructor(request) {
        this.request = request;
    }
    async getUsers() {
        try {
            const users = await this.request.get('users');

            return users;
        } catch (error) {
            console.log(error);
        }
    }

    async loginUser(body) {
        return await this.request.post('users/user/login', body);
    }

    async getUserProfile() {
        return await this.request.get('users/user/profile');
    }
}
