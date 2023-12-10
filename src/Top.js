import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Top extends Component {

    render() {
        return (
            <header>
                <div className="grid grid-cols-10">
                    <Link to="/" key="btn-hm" className="place-self-start col-span-8">
                        <img
                            alt="home"
                            src="/favicon.ico"/>
                    </Link>
                    {["Blogger", "About"].map((el, idx) => {
                        return (<Link
                                className="place-self-center"
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