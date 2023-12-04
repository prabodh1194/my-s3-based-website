import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
    return (
        <div className="App">
            <p>This react-based application is hosted in an S3 bucket exposed through a CloudFront distribution</p>
            <Router>
                <Switch>
                    <Route exact path="/a" render={(props) => <span>a</span>}/>
                    <Route exact path="/b" render={(props) => <span>b</span>}/>
                    <Route exact path="/c" render={(props) => <span>c</span>}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;