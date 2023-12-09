import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './navbar.css'

class Top extends Component {

    render() {
        return (
            <header className="masthead mb-auto">
                <div className="navbar">
                    <Link to="/" key="btn-hm">
                        <img
                            className="navicon"
                            alt="home"
                            src="/favicon.ico" />
                    </Link>
                    <div className="nav-buttons">
                    {["Blogger", "About"].map((el, idx) =>
                    {
                        return (<Link
                                to={`/${el.toLowerCase()}`}
                                key={`btn-${idx}`}>
                                <button className="top bt nunito text nav-button">
                                    {el}
                                </button>
                            </Link>
                        );
                    })
                    }
                    </div>
                </div>
            </header>
        );
    }
}

export default Top;