import React from 'react';

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
        console.log(state);
        const response = await fetch('http://localhost:4000', {
            method: 'post',
            mode: 'no-cors',
            headers: {
                'Cache-Control': 'no-cache',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: '{"MyKey":"My Value"}',
        });
        return await response.json();
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
