import React from 'react';
import Header from './Header';
import request from './api';

console.log(request);

const Home = () => {
    interface Users {
        id: number;
        name: string;
        email: string;
        password: string;
        registerDate: string;
    }

    const [users, setUsers] = React.useState<Users[]>([]);

    // const getUsers = async () => {
    //     try {
    //         const users = await request.get('api/users');
    //         setUsers(users);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    React.useEffect(() => {
        request.getUsers().then(users => setUsers(users));
    }, []);

    return (
        <div className="App">
            <Header />
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
