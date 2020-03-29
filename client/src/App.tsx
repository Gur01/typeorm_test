import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import Admin from './Admin';
import Register from './Register';
import Login from './Login';
import UserContext from './UserContext';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => {
            return localStorage.getItem('token') ? (
                <Component {...props} />
            ) : (
                <Redirect to="/login" />
            );
        }}
    />
);

const App = () => {
    const [user, setUser] = React.useState(null);
    const providerValue = React.useMemo(() => ({ user, setUser }), [user, setUser]);
    return (
        <div>
            <UserContext.Provider value={providerValue}>
                <BrowserRouter>
                    <Switch>
                        <PrivateRoute path="/" exact component={Home} />
                        <Route path="/admin" exact component={Admin} />
                        <Route path="/register" exact component={Register} />
                        <Route path="/login" exact component={Login} />

                        <Route path="/" render={() => <div>Not found</div>} />
                    </Switch>
                </BrowserRouter>
            </UserContext.Provider>
        </div>
    );
};

export default App;
