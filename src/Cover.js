import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

let resizeTimeout;

// this is definitely bad
let blogCover;
let jumbotron;
let top;
let bottom;

function resizeThrottler() {
    // ignore resize events as long as an actualResizeHandler execution is
    // in the queue
    // Ref MDN for this beauty:
    // https://developer.mozilla.org/en-US/docs/Web/Events/resize
    if ( !resizeTimeout ) {
        resizeTimeout = setTimeout(function() {
            resizeTimeout = null;
            actualResizeHandler();

            // The actualResizeHandler will execute at a rate of 15fps
        }, 66);
    }
}

function actualResizeHandler() {
    window.dispatchEvent(new CustomEvent("optimizedResize"));
}

class Cover extends Component {

    componentDidMount() {
        blogCover  = this.blogCover;
        jumbotron  = this.blogCover.children[0];
        top    = this.props.top;
        bottom = this.props.bottom;
        this.updateDimensions();
        window.addEventListener("resize", resizeThrottler, false);
        window.addEventListener("optimizedResize", this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", resizeThrottler, false);
        window.removeEventListener("optimizedResize", this.updateDimensions);
    }

    updateDimensions() {
        let hh = window.innerHeight - jumbotron.clientHeight;

        if (hh < 0) {
            return;
        }

        if (top && bottom) {
            blogCover.style.paddingTop = `${hh/2}px`;
            blogCover.style.paddingBottom =  `${hh/2}px`;
        } else if (top) {
            blogCover.style.paddingTop = `${hh}px`;
        } else if (bottom) {
            blogCover.style.paddingBottom =  `${hh}px`;
        }
    }

    render() {
        return (
            <div ref={el => this.blogCover = el}>
                <Jumbotron bsClass="jumbotron blog cover text-center">
                    {this.props.children}
                </Jumbotron>
            </div>
        );
    }
}

export default Cover;