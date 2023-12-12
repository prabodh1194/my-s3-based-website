import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Top from './Top';
import Main from './Main';

class App extends Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route element={<Top/>}>
                        <Route exact path="/" element={<Main/>}/>
                        <Route exact path="/about" element={<div>a</div>}/>
                        <Route exact path="/blog" element={<div>b</div>}/>
                        <Route exact path="/resume"
                               element={() => window.location = 'https://drive.google.com/open?id=1dwvo4DMUiaBLmgXu1QsH5ipHtCaogrSU'}/>
                    </Route>
                </Routes>
            </Router>
        );
    }
}

export default App;