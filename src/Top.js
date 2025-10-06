import React, {Component} from 'react';
import {Link, Outlet} from 'react-router-dom';
import { faLinkedinIn, faGithub, faTwitter, faMedium } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt } from '@fortawesome/free-solid-svg-icons'


class Top extends Component {
    render() {
        return (
            <div className="app-container d-flex flex-column min-vh-100">
                <header>
                    <div className="nav-container">
                        <Link to="/" className="logo">
                            Prabodh Agarwal
                        </Link>
                        <ul className="nav-links">
                            <li><Link to="/blog"><span>blog</span></Link></li>
                            <li><Link to="/@me"><span>@me</span></Link></li>
                        </ul>
                    </div>
                </header>

                <div className="content-area flex-grow-1">
                    <Outlet/>
                </div>

                <footer>
                    <div className="footer-content">
                        <div className="footer-links">
                            <a href="//twitter.com/prabodh_agarwal" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className="fa-icon" icon={faTwitter} />
                            </a>
                            <a href="//github.com/prabodh1194" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className="fa-icon" icon={faGithub} />
                            </a>
                            <a href="//linkedin.com/in/prabodh-agarwal" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className="fa-icon" icon={faLinkedinIn} />
                            </a>
                            <a href="//medium.com/@pbd_94" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className="fa-icon" icon={faMedium} />
                            </a>
                            <a href="mailto:prabodh1194@gmail.com?subject=Hi from your blog" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className="fa-icon" icon={faAt} />
                            </a>
                        </div>
                        <div className="footer-copyright">
                            © {new Date().getFullYear()} Prabodh Agarwal
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Top;
