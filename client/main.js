import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/main_home';
import MainCourseSearch from './components/main_cs';

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/MainCourseSearch">Course Search</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/MainCourseSearch">
                        <MainCourseSearch />
                    </Route>
                </Switch>
            </div>
        </Router>
  );
};

Meteor.startup(() => {
  // React render call
  ReactDOM.render(<App />, document.getElementById('render-target'));
});
