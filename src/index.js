import React from 'react';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';


import {createRoot} from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <div className="vh-100 m-auto" style={{
            "maxWidth": "70ch",
            "padding": "1ch",
        }}>
            <App/>
        </div>
    </React.StrictMode>
);