import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import {Container} from "react-bootstrap";


ReactDOM.render(
    <React.StrictMode>
        <div className="vh-100 m-auto" style={{"width": "70ch"}}>
            <App/>
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);
