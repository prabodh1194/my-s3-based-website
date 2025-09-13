import {Component} from "react";

class Main extends Component {
    render() {
        return (
            <div className="row justify-content-evenly align-items-center h-75 py-3">
                <div className="col-auto">
                    <h1 style={{"color": "var(--text-primary)", "lineHeight": "1.0"}}>Hi, I'm <span className="rainbow">Prabodh;</span></h1>
                    <h4 className="fw-light" style={{"color": "var(--text-secondary)"}}>you can call me <span
                        className="fst-italic">pbd</span>.</h4>
                    <br/>
                    <h2 className="font-monospace" style={{"color": "var(--cyber-blue)"}}>I'm a software engineer.</h2>
                </div>
            </div>
        );
    }
}

export default Main;
