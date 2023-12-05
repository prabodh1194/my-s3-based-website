import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cover from './Cover';

class Main extends Component {

    constructor(props) {
        super(props);

        props.showTop(false);
    }

    render() {
        return (
            <Cover top={true} bottom={true}>
                <div id="pbd"
                     className="shrikhand">
                    <Link to="about">
                        <h1 className="display-1">Prabodh Agarwal</h1>
                    </Link>
                </div>
                <div>
                    {["Blogger"].map((el, idx) =>
                    {
                        return (<Link
                                to={`/${el.toLowerCase()}`}
                                key={`btn-${idx}`}>
                                <button className="blog bt alegreya">
                                    {el}.
                                </button>
                            </Link>
                        );
                    })
                    }
                </div>
            </Cover>
        );
    }
}

export default Main;