import logo from './logo.svg';
import logoS3 from './logoS3.png';
import logoCF from './logoCloudFront.png';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-MainLogo" alt="logo"/>
            </header>
            <p>This react-based application is hosted in an S3 bucket exposed through a CloudFront distribution</p>
            <div className="logos">
                <img src={logoS3} className="App-logoR2L" alt="logo S3"/>
                <img src={logoCF} className="App-logoL2R" alt="logo CloudFront"/>
            </div>
        </div>
    );
}

export default App;