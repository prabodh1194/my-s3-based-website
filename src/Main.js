import {Component} from "react";

class Main extends Component {
    render() {
        return (
            <div className="row justify-content-evenly align-items-center h-75">
                <div className="col-auto">
                    <h1 style={{"color": "var(--bs-gray-700)", "lineHeight": "1.0"}}>Hi, I'm <span>Prabodh;</span></h1>
                    <h4 className="fw-light" style={{"color": "var(--bs-gray)"}}>you can call me <span
                        className="fst-italic">pbd</span>.</h4>
                    <br/>
                    <h2 className="font-monospace" style={{"color": "var(--bs-blue)"}}>I'm a software engineer.</h2>
                </div>
            </div>
        );
    }
}

export default Main;
