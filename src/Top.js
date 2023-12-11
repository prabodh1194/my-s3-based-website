import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Top extends Component {

    render() {
        return (
            <header>
                <div>
                    <Link to="/" key="btn-hm">
                        <img
                            alt="home"
                            src="/favicon.ico"/>
                    </Link>
                    {["Blogger", "About"].map((el, idx) => {
                        return (<Link
                                to={`/${el.toLowerCase()}`}
                                key={`btn-${idx}`}>
                                <button>
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