import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Register from './Register';

const App = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/register' exact component={Register} />

            <Route path='/' render={()=> <div>Not found</div>} />
        </Switch>
        </BrowserRouter>
    );
};

export default App;
