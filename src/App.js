import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Top from './Top';
import Main from './Main';
import Blog from "./Blog";
import About from "./About";


const App = () => {
    const [blogs, setBlogs] = React.useState([])
    const [routes, setRoutes] = React.useState([])

    useEffect(() => {
        const importAll = (context) => context.keys().map(context);
        const components = importAll(require.context('./blogs/', true, /\.js$/));
        setBlogs(components)
    }, []);

    useEffect(() => {
        const _routes = blogs.map((Component, index) => {
            const _created_date = Component.created_on
            const path = `/blog/${_created_date.slash()}/${Component.name}`

            return <Route key={Component.name} exact path={path} element={
                <div className="row fs-6 fw-light">
                    <h3 className="align left fw-bold">{Component.name}</h3>
                    <span className="mt-1 mb-4 fw-lighter">Published on:
                        <time dateTime={Component.created_on}>{Component.created_on.words()}</time>
                    </span>
                    <content className="align left">
                    <Component.mod/>
                    </content>
                </div>
            }
            />
        })
        setRoutes(_routes)
    }, [blogs]);


    return (
        <Router>

            <Routes>
                <Route element={<Top/>}>
                    <Route exact path="/" element={<Main/>}/>
                    <Route exact path="/about" element={<About/>}/>
                    <Route exact path="/blog" element={<Blog/>}/>
                    <Route exact path="/blog/:year" element={<Blog/>}/>
                    <Route exact path="/blog/:year/:month" element={<Blog/>}/>
                    <Route exact path="/blog/:year/:month/:date" element={<Blog/>}/>
                    <Route exact path="/resume"
                           element={() => window.location = 'https://drive.google.com/open?id=1dwvo4DMUiaBLmgXu1QsH5ipHtCaogrSU'}/>
                    {routes}
                </Route>
            </Routes>
        </Router>
    );
}

export default App;