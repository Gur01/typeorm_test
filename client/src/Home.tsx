import React from 'react';
import request from './api';
import Header from './Header';

const Home = () => {
    interface Users {
        id: number;
        name: string;
        email: string;
        password: string;
        registerDate: string;
    }

    const [users, setUsers] = React.useState<Users[]>([]);

    React.useEffect(() => {
        request.getUsers().then(users => {
            setUsers(users);
        });
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
