import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu/Menu';
import routes from './routes';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="navbar-default">
                    <Menu />
                    <div className="container">
                        <div className="row">
                            {this.showContain(routes)}
                        </div>
                    </div>
                </div>
            </Router>
        );
    }

    showContain = (routes) => {
        var result = null;

        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                )
            })
        }

        return <Switch>{result}</Switch>;
    }
}

export default App;
