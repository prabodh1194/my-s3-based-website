import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Top from './Top';
import Main from './Main';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/" render={(props) => <Top location={props.location}/>} />
                    <Routes>
                        <Route exact path="/" render={(props) => <Main {...props} />} />
                        <Route exact path="/about" render={() => <div>a</div> }/>
                        <Route exact path="/blogger" render={() => <div>b</div> }/>
                        <Route exact path="/resume" render={() => window.location = 'https://drive.google.com/open?id=1dwvo4DMUiaBLmgXu1QsH5ipHtCaogrSU'} />
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default App;