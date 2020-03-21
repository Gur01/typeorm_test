export default function(request) {
    return {
        getUsers: async function() {
            try {
                const users = await request.get('users');

                return users;
            } catch (error) {
                console.log(error);
            }
        },

        loginUser: async function(body) {
            try {
                const token = await request.post('users/user/login', body);

                return token;
            } catch (error) {
                console.log(error);
            }
        },
        getUserProfile: async function() {
            try {
                const user = await request.get('users/user/profile');
                console.log(user);

                return user;
            } catch (error) {
                console.log(error);
            }
        },
    };
}
