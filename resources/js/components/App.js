import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import '../../css/styles.css';
//import 'bootstrap/dist/css/bootstrap.css';

//import 'jquery';
//import 'bootstrap/dist/js/bootstrap';

import Menu from './Menu';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';

function App() {
    return (
        <BrowserRouter>
            <Menu />
            <Switch>
                <Route path="/users/dashboard">
                    <Dashboard />
                </Route>
                <Route path="/pool/login">
                    <Login />
                </Route>
                <Route path="/pool/register">
                    <Register />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
