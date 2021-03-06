import React from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './component/pages/Login';
import NotFound from './component/pages/NotFound';
import App from './App';
// import config from './routes/config';

export default () => (
    <Router>
        <Switch>
            {/* <Route
                exact
                path="/"
                render={() => (
                    <Redirect
                        to={
                            config.menus[0].subs ? config.menus[0].subs[0].key : config.menus[0].key
                        }
                    />
                )}
            /> */}
            <Route exact path="/" component={Login} />
            <Route path="/app" component={App} />
            <Route path="/404" component={NotFound} />
            <Route component={NotFound} />
        </Switch>
    </Router>
);
