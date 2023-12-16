import React, {Component} from 'react';
import {Link, Outlet} from 'react-router-dom';
import { faLinkedinIn, faGithub, faTwitter, faMedium } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt } from '@fortawesome/free-solid-svg-icons'


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
                <hr/>
                <Outlet/>
                <footer className="mt-5">
                    <hr className="mt-5"/>
                    <div className="mt-5 d-flex px-3">
                        <span className="text-muted flex-grow-1">© 2023 Prabodh Agarwal</span>
                        <div className="d-flex justify-content-evenly gap-3">
                            <a href="//twitter.com/prabodh_agarwal" className="">
                                <FontAwesomeIcon style={{"color": "black"}} icon={faTwitter} />
                            </a>
                            <a href="//github.com/prabodh1194" className="">
                                <FontAwesomeIcon style={{"color": "black"}} icon={faGithub} />
                            </a>
                            <a href="//linkedin.com/in/prabodh-agarwal" className="">
                                <FontAwesomeIcon style={{"color": "black"}} icon={faLinkedinIn} />
                            </a>
                            <a href="//medium.com/@pbd_94" className="">
                                <FontAwesomeIcon style={{"color": "black"}} icon={faMedium} />
                            </a>
                            <a href="mailto:prabodh1194@gmail.com?subject=Hi from your blog">
                                <FontAwesomeIcon style={{"color": "black"}} icon={faAt} />
                            </a>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default Top;