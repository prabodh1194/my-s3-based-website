import React, {Component} from 'react';
import {Link, Outlet} from 'react-router-dom';
import { faLinkedinIn, faGithub, faTwitter, faMedium } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt } from '@fortawesome/free-solid-svg-icons'


class Top extends Component {
    render() {
        return (
            <>
                <header className="d-flex align-items-center pt-1">
                    <Link to="/" key="btn-hm" className="flex-grow-1">
                        <button className="btn fw-light fs-5">
                            <span className="fst-italic">/</span>
                        </button>
                    </Link>
                    {["blog", "@me"].map((el, idx) => {
                        return (<Link
                                className="ps-2 align-items-center"
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
                <hr/>
                <Outlet/>
                <footer className="mt-3">
                    <hr className="mt-3"/>
                    <div className="mt-3 d-flex px-3">
                        <span className="text-muted flex-grow-1">© {new Date().getFullYear()} Prabodh Agarwal</span>
                        <div className="d-flex justify-content-evenly gap-3">
                            <Link to="//twitter.com/prabodh_agarwal" className="">
                                <FontAwesomeIcon style={{"color": "black"}} icon={faTwitter} />
                            </Link>
                            <Link to="//github.com/prabodh1194" className="">
                                <FontAwesomeIcon style={{"color": "black"}} icon={faGithub} />
                            </Link>
                            <Link to="//linkedin.com/in/prabodh-agarwal" className="">
                                <FontAwesomeIcon style={{"color": "black"}} icon={faLinkedinIn} />
                            </Link>
                            <Link to="//medium.com/@pbd_94" className="">
                                <FontAwesomeIcon style={{"color": "black"}} icon={faMedium} />
                            </Link>
                            <Link to="mailto:prabodh1194@gmail.com?subject=Hi from your blog">
                                <FontAwesomeIcon style={{"color": "black"}} icon={faAt} />
                            </Link>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default Top;