import {useParams, useSearchParams} from 'react-router-dom';
import React, {useEffect} from "react";

const ArticleLine = (props) => {
    return (
        <div className="d-flex justify-content-between align-items-center">
            <span><a href={props.path}>{props.title}</a></span>
            <hr className="flex-grow-1 mx-2"/>
            <time dateTime={props.created_on}
                  style={{"width": "10ch", "fontVariantNumeric": "tabular-nums"}}>{props.created_on}</time>
        </div>
    )
}
const Blog = (props) => {
    let z = useParams();
    let [query, setSearchParams] = useSearchParams();

    const [blogs, setBlogs] = React.useState([])
    const [routes, setRoutes] = React.useState([])

    useEffect(() => {
        const importAll = (context) => context.keys().map(context);
        const components = importAll(require.context('./blogs/', true, /\.js$/));
        setBlogs(components)
    }, []);

    useEffect(() => {
        const page = query.get("page") || 1;
        const _routes = blogs.map((Component, _) => {
            const _created_date = Component.created_on;

            if (z.year && _created_date.year !== z.year) {
                return null;
            }

            if (z.month && 1 + _created_date.month !== z.month) {
                return null;
            }

            if (z.date && _created_date.date !== z.date) {
                return null;
            }

            const path = `/blog/${_created_date.slash()}`
            return <ArticleLine title={Component.name}
                                key={Component.name}
                                path={path}
                                _created_on={Component.created_on}
                                created_on={Component.created_on.dash()}/>
        }).filter((x) => {
            return x !== null
        }).sort((a, b) => {
            return b.props._created_on.hash() - a.props._created_on.hash()
        }).slice((page - 1) * 10, page * 10)
        setRoutes(_routes)
    }, [blogs, z, query]);


    return (
        <>
            <h3>Articles:</h3>
            <div>
                {routes.length > 0 ? routes : <span>No articles found</span>}
            </div>
        </>
    )
}

export default Blog;