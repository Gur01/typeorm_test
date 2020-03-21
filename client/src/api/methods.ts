export default function(request) {
    return {
        getUsers: async function() {
            try {
                const users = await request.get('api/user');

                return users;
            } catch (error) {
                console.log(error);
            }
        },

        loginUser: async function(body) {
            try {
                const token = await request.post('api/user/login', body);

                return token;
            } catch (error) {
                console.log(error);
            }
        },
    };
}
