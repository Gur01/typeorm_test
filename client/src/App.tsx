import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Admin from './Admin';
import Register from './Register';
import Login from './Login';
import request from './api';
import UserContext from './UserContext';

const App = () => {
    const [user, setUser] = React.useState({ name: '', email: '' });

    // React.useEffect(() => {
    //     request.getUserProfile().then(user => {
    //         setUser(user);
    //     });
    // }, [user]);
    return (
        <BrowserRouter>
            <UserContext.Provider value={{ user, setUser }}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/admin" exact component={Admin} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/login" exact component={Login} />

                    <Route path="/" render={() => <div>Not found</div>} />
                </Switch>
            </UserContext.Provider>
        </BrowserRouter>
    );
};

export default App;
