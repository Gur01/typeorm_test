import React from 'react';

const Home = () => {
    interface Users {
        id: number;
        name: string;
        email: string;
        password: string;
        registerDate: string;
    }

    const [users, setUsers] = React.useState<Users[]>([]);

    const getUsers = async () => {
        try {
            const request = await fetch('http://localhost:4000/api/users');

            const users = await request.json();
            setUsers(JSON.parse(users));
        } catch (error) {
            console.log(error);
        }
    };

    React.useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className="App">
            {users.length && (
                <table style={{ width: '100%', textAlign: 'center' }}>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>email</th>
                            <th>password</th>
                            <th>date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, id) => {
                            return (
                                <tr key={id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.password}</td>
                                    <td>{user.registerDate}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Home;
