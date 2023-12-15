import {useParams} from 'react-router-dom';
import React, {useEffect} from "react";

const ArticleLine = (props) => {
    return (
        <div className="d-flex justify-content-between">
            <span><a href={props.path}>{props.title}</a></span>
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
            const _created_date = new Date(Component.created_on);

            if (z.year && _created_date.getFullYear() !== +z.year) {
                return null;
            }

            if (z.month && 1 + _created_date.getMonth() !== +z.month) {
                return null;
            }

            if (z.date && _created_date.getDate() !== +z.date) {
                return null;
            }

            const path = `/blog/${_created_date.getFullYear()}/${1 + _created_date.getMonth()}/${_created_date.getDate()}/${Component.name}`
            return <ArticleLine title={Component.name}
                                path={path}
                                created_on={new Date(Component.created_on).toISOString().slice(0, 10)}/>
        }).filter((x) => {
            return x !== null
        })
        setRoutes(_routes)
    }, [blogs, z]);


    return (
        <>
            <h3>Articles:</h3>
            <div >
                {routes.length > 0 ? routes : <span>No articles found</span>}
            </div>
        </>
    )
}

export default Blog;