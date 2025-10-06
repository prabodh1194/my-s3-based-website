import React, {useEffect} from "react";

export const BlogElement = ({component}) => {
    const contentRef = React.useRef(null);
    const [readWords, setReadWords] = React.useState(0);

    useEffect(() => {
        if (!contentRef.current) return;

        let text = contentRef.current.innerText;

        setReadWords(text.trim().split(/\s+/).length);
    }, [contentRef]);

    return (
        <main>
            <article>
                <div className="article-header">
                    <div className="article-meta">
                        <span><time dateTime={component.created_on}>{component.created_on.words()}</time></span>
                        <span>·</span>
                        <span>{readWords} words</span>
                    </div>
                    <h1>{component.name}</h1>
                </div>

                <div className="article-content" ref={contentRef}>
                    <component.mod />
                </div>
            </article>
        </main>
    );
}
