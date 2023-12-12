import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';


ReactDOM.render(
    <React.StrictMode>
        <div className="vh-100 m-auto" style={{
            "maxWidth": "70ch",
            "padding": "2ch"
        }}>
            <App/>
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);
