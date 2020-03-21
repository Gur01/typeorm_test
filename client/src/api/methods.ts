export default function(request) {
    return {
        getUsers: async function() {
            try {
                const users = await request.get('api/users');
                return users;
            } catch (error) {
                console.log(error);
            }
        },
    };
}
