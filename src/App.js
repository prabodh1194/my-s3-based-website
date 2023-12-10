import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Top from './Top';
import Main from './Main';
import ToggleDarkMode from "./ToggleDarkMode";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ToggleDarkMode />
                    <input type="checkbox" name="light-switch" className="light-switch" />
                    <label htmlFor="light-switch">Switch to light / dark version</label>
                    <Route path="/" render={(props) => <Top location={props.location}/>} />
                    <Switch>
                        <Route exact path="/" render={(props) => <Main {...props} />} />
                        <Route exact path="/about" render={() => <div>a</div> }/>
                        <Route exact path="/blogger" render={() => <div>b</div> }/>
                        <Route exact path="/resume" render={() => window.location = 'https://drive.google.com/open?id=1dwvo4DMUiaBLmgXu1QsH5ipHtCaogrSU'} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;