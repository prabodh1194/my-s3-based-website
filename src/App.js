import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Top from './Top';
import Main from './Main';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showTop: true
        }
    }

    _showTop = (isShow) => {
        this.setState({showTop: isShow});
    }

    render() {
        return (
            <Router>
                <div>
                    {this.state.showTop &&
                        <Route path="/" render={(props) => <Top location={props.location}/>} />}
                    <Switch>
                        <Route exact path="/" render={(props) => <Main {...props} showTop={this._showTop} />} />
                        <Route exact path="/resume" render={() => window.location = 'https://drive.google.com/open?id=1dwvo4DMUiaBLmgXu1QsH5ipHtCaogrSU'} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;