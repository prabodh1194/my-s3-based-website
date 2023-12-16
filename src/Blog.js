import {useParams} from 'react-router-dom';
import React, {useEffect} from "react";

const ArticleLine = (props) => (
    <div className="d-flex justify-content-between align-items-center">
        <span><a href={props.path}>{props.title}</a></span>
        <hr className="flex-grow-1 ms-2 me-3"/>
        <time dateTime={props.created_on}
              style={{"width": "10ch", "fontVariantNumeric": "tabular-nums"}}>{props.created_on}</time>
    </div>
);

const Blog = () => {
    let pathParams = useParams();

    const [blogs, setBlogs] = React.useState([])
    const [routes, setRoutes] = React.useState([])

    useEffect(() => {
        const importAll = (context) => context.keys().map(context);
        const components = importAll(require.context('./blogs/', true, /\.js$/));
        setBlogs(components)
    }, []);

    useEffect(() => {
        const _routes = blogs.map((Component, _) => {
            const _created_date = Component.created_on;

            if (pathParams.year && _created_date.year !== pathParams.year) {
                return null;
            }

            if (pathParams.month && 1 + _created_date.month !== pathParams.month) {
                return null;
            }

            if (pathParams.date && _created_date.date !== pathParams.date) {
                return null;
            }

            const path = `/blog/${_created_date.slash()}/${Component.name}`;
            return (
                <ArticleLine
                    title={Component.name} key={Component.name}
                    path={path} _created_on={Component.created_on}
                    created_on={Component.created_on.dash()}
                />
            );
        }).filter(
            x => x
        ).sort(
            (a, b) => b.props._created_on.hash() - a.props._created_on.hash()
        ).flatMap((x, i, _arr) => {
            if (i === 0 || x.props._created_on.year !== _arr[i - 1].props._created_on.year) {
                return [<h4 className="fw-bold text-center my-4">{x.props._created_on.year}</h4>, x];
            }
            return [x];
        });

        setRoutes(_routes);
    }, [blogs, pathParams]);

    return (
        <>
            <h3 className="fw-bold">Articles:</h3>
            <div>
                {routes.length > 0 ? routes : <span>No articles found</span>}
            </div>
        </>
    )
}

export default Blog;