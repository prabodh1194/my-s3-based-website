import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Top from './Top';
import Main from './Main';
import Blog from "./Blog";
import About from "./About";

class App extends Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route element={<Top/>}>
                        <Route exact path="/" element={<Main/>}/>
                        <Route exact path="/about" element={<About />}/>
                        <Route exact path="/blog" element={<Blog />}/>
                        <Route exact path="/resume"
                               element={() => window.location = 'https://drive.google.com/open?id=1dwvo4DMUiaBLmgXu1QsH5ipHtCaogrSU'}/>
                    </Route>
                </Routes>
            </Router>
        );
    }
}

export default App;