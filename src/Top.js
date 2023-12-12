import React, {Component} from 'react';
import {Link, Outlet} from 'react-router-dom';

class Top extends Component {

    render() {
        return (
            <>
                <header className="d-flex align-items-center">
                    <Link to="/" key="btn-hm" className="p-4 flex-grow-1">
                        <img
                            alt="home"
                            src="/favicon.ico"/>
                    </Link>
                    {["About", "Blog"].map((el, idx) => {
                        return (<Link
                                className="pe-5 py-4 align-items-center"
                                to={`/${el.toLowerCase()}`}
                                key={`btn-${idx}`}>
                                <button className="btn fw-light fs-5">
                                    {el}
                                </button>
                            </Link>
                        );
                    })
                    }
                </header>
                <Outlet/>
            </>
        );
    }
}

export default Top;