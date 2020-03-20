import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Register from './Register';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/register" exact component={Register} />

                <Route path="/" render={() => <div>Not found</div>} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
