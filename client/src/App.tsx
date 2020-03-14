import React from 'react';
import qs from 'querystring';

const App = () => {
    const [state, setState] = React.useState({
        name: '',
        email: '',
        password: '',
    });

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
            const request = await fetch('http://localhost:4000', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: qs.stringify(state),
            });

            const user = await request.json();
        } catch (error) {
            console.error(error);
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
        </div>
    );
};

export default App;
