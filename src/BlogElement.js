import React from "react";

export const BlogElement = ({component}) => (
    <div className="row fs-6 fw-light">
        <h3 className="align left fw-bold">{component.name}</h3>
        <div className="mt-1 mb-4 fw-lighter">
            <time dateTime={component.created_on}>{component.created_on.words()}</time>
        </div>
        <content className="align left">
            <component.mod/>
        </content>
    </div>
)