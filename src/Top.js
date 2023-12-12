import React, {Component} from 'react';
import {Link, Outlet} from 'react-router-dom';

class Top extends Component {

    render() {
        return (
            <>
                <header className="d-flex align-items-center pt-4">
                    <Link to="/" key="btn-hm" className="flex-grow-1">
                        <img
                            alt="home"
                            src="/favicon.ico"/>
                    </Link>
                    {["About", "Blog"].map((el, idx) => {
                        return (<Link
                                className="ps-5 align-items-center"
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
                <hr />
                <Outlet/>
            </>
        );
    }
}

export default Top;