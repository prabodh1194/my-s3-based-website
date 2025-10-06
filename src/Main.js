import {Component} from "react";

class Main extends Component {
    render() {
        return (
            <main className="main-page">
                <div className="page-wrapper">
                    <div className="main-content d-flex align-items-center justify-content-center" style={{minHeight: "70vh"}}>
                        <div className="text-center">
                            <h1>Hi, I'm Prabodh;</h1>
                            <h4 className="fw-light">you can call me <span
                                className="fst-italic">pbd</span>.</h4>
                            <br/>
                            <h2 className="font-monospace">I'm a software engineer.</h2>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Main;
