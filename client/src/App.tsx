import React from 'react';

const App = () => {
    const [state, setState] = React.useState({
        name: '',
        email: '',
        password: '',
    });

    interface Users {
        id: number;
        name: string;
        email: string;
        password: string;
        registerDate: string;
    }

    const [users, setUsers] = React.useState<any>([]);

    React.useEffect(() => {
        getUsers();
    }, []);

    const handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
        setState({ ...state, name: e.currentTarget.value });
    };

    const handleEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
        setState({ ...state, email: e.currentTarget.value });
    };

    const handlePasswordChange = (e: React.FormEvent<HTMLInputElement>) => {
        setState({ ...state, password: e.currentTarget.value });
    };

    const handleSave = async () => {
        try {
            await fetch('http://localhost:4000/api/users', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(state),
            });

            getUsers();
        } catch (error) {
            console.error(error);
        }
    };

    const getUsers = async () => {
        try {
            const request = await fetch('http://localhost:4000/api/users');

            const users = await request.json();
            setUsers(JSON.parse(users));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="App">
            <div>
                <input type="text" value={state.name} onChange={handleNameChange} />
                name
            </div>
            <div>
                <input type="text" value={state.email} onChange={handleEmailChange} />
                email
            </div>
            <div>
                <input type="text" value={state.password} onChange={handlePasswordChange} />
                password
            </div>
            <button onClick={handleSave}>save</button>

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

export default App;
