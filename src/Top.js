import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Top extends Component {

    render() {
        return (
            <header className="masthead mb-auto">
                <div className="container">
                    <Link to="/" key="btn-hm">
                        <img
                            className="top bt nunito img"
                            alt="home"
                            src="/favicon.ico" />
                    </Link>
                    {["Blogger", "About"].map((el, idx) =>
                    {
                        return (<Link
                                to={`/${el.toLowerCase()}`}
                                key={`btn-${idx}`}>
                                <button className="top bt nunito text">
                                    {el}
                                </button>
                            </Link>
                        );
                    })
                    }
                </div>
            </header>
        );
    }
}

export default Top;