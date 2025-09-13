import React, {Component} from 'react';
import {Link, Outlet} from 'react-router-dom';
import { faLinkedinIn, faGithub, faTwitter, faMedium } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt } from '@fortawesome/free-solid-svg-icons'


class Top extends Component {
    render() {
        const navItems = ["blog", "@me"];
        
        return (
            <>
                <header className="d-flex align-items-center pt-1">
                    <Link to="/" key="btn-hm" className="flex-grow-1">
                        <button className="nav-btn fw-light fs-5">
                            <span className="fst-italic">/</span>
                        </button>
                    </Link>
                    {navItems.map((el, idx) => {
                        return (<Link
                                className="ps-2 align-items-center"
                                to={`/${el.toLowerCase()}`}
                                key={`btn-${idx}`}>
                                <button className="nav-btn fw-light fs-5">
                                    <span className="cyber-text">{el}</span>
                                </button>
                            </Link>
                        );
                    })}
                </header>
                <div className="container-fluid px-2 flex-grow-1">
                    <Outlet/>
                </div>
                <footer className="mt-3">
                    <div className="footer-content px-3">
                        <div className="footer-copyright cyber-text">
                            © {new Date().getFullYear()} Prabodh Agarwal
                        </div>
                        <div className="footer-links">
                            <Link to="//twitter.com/prabodh_agarwal">
                                <FontAwesomeIcon className="fa-icon" icon={faTwitter} />
                            </Link>
                            <Link to="//github.com/prabodh1194">
                                <FontAwesomeIcon className="fa-icon" icon={faGithub} />
                            </Link>
                            <Link to="//linkedin.com/in/prabodh-agarwal">
                                <FontAwesomeIcon className="fa-icon" icon={faLinkedinIn} />
                            </Link>
                            <Link to="//medium.com/@pbd_94">
                                <FontAwesomeIcon className="fa-icon" icon={faMedium} />
                            </Link>
                            <Link to="mailto:prabodh1194@gmail.com?subject=Hi from your blog">
                                <FontAwesomeIcon className="fa-icon" icon={faAt} />
                            </Link>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default Top;