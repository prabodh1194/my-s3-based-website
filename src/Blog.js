import {useParams} from 'react-router-dom';
import React, {useEffect} from "react";

const ArticleLine = (props) => {
    return (
        <div className="d-flex justify-content-between">
            <span>{props.title}</span>
            <hr />
            <span>{props.created_on}</span>
        </div>
    )
}
const Blog = (props) => {
    let z = useParams();
    const [blogs, setBlogs] = React.useState([])
    const [routes, setRoutes] = React.useState([])

    useEffect(() => {
        const importAll = (context) => context.keys().map(context);
        const components = importAll(require.context('./blogs/', true, /\.js$/));
        setBlogs(components)
    }, []);

    useEffect(() => {
        const _routes = blogs.map((Component, _) => {
            return <ArticleLine title={Component.name}
                                created_on={new Date(Component.created_on).toISOString().slice(0, 10)}/>
        })
        setRoutes(_routes)
    }, [blogs]);


    return (
        <>
            <h3>Articles:</h3>
            <div >
                {routes}
            </div>
        </>
    )
}

export default Blog;