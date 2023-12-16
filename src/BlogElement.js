import React, {useEffect} from "react";

export const BlogElement = ({component}) => {
    const contentRef = React.useRef(null);
    const [readWords, setReadWords] = React.useState(0);

    useEffect(() => {
        if (!contentRef.current) return;

        let text = contentRef.current.innerText;

        setReadWords(text.trim().split(/\s+/).length);
    }, []);

    return (
        <div className="row fs-6 fw-light">
            <h3 className="align left fw-bold">{component.name}</h3>
            <div className="mt-1 mb-4 fw-lighter">
                <time dateTime={component.created_on}>{component.created_on.words()}</time>
                <span className="mx-2">•</span>
                <span>{readWords} words</span>
            </div>
            <article ref={contentRef} className="align left">
                <component.mod />
            </article>
        </div>
    );
}