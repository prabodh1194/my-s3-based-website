import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Top from './Top';
import Main from './Main';
import Blog from "./Blog";
import About from "./About";
import {BlogElement} from "./BlogElement";
import ColorPalette from "./ColorPalette";
import WaveBackground from './WaveBackground';
import StockAnalysisList from "./StockAnalysisList";
import StockAnalysisPage from "./StockAnalysisPage";


const App = () => {
    const [blogs, setBlogs] = React.useState([])
    const [blogRoutes, setBlogRoutes] = React.useState([])

    useEffect(() => {
        const importAll = (context) => context.keys().map(context);
        const components = importAll(require.context('./blogs/', true, /\.js$/));
        setBlogs(components)
    }, []);

    useEffect(() => {
        const _routes = blogs.map((Component, index) => {
            const _created_date = Component.created_on
            const path = `/blog/${_created_date.slash()}/${Component.name.replace(/\W+/g, '-').toLowerCase()}`

            return <Route key={Component.name} exact path={path} element={<BlogElement component={Component}/>}/>
        })
        setBlogRoutes(_routes)
    }, [blogs]);


    return (
        <Router>
            <WaveBackground />
            <Routes>
                <Route element={<Top/>}>
                    <Route exact path="/" element={<Main/>}/>
                    <Route exact path="/@me" element={<About/>}/>
                    <Route exact path="/blog" element={<Blog/>}/>
                    <Route exact path="/blog/:year" element={<Blog/>}/>
                    <Route exact path="/blog/:year/:month" element={<Blog/>}/>
                    <Route exact path="/blog/:year/:month/:date" element={<Blog/>}/>
                    <Route exact path="/se" element={<StockAnalysisList/>}/>
                    <Route exact path="/se/:date" element={<StockAnalysisPage/>}/>
                    <Route exact path="/colors" element={<ColorPalette/>}/>
                    <Route exact path="/resume"
                           element={() => window.location = 'https://drive.google.com/open?id=1dwvo4DMUiaBLmgXu1QsH5ipHtCaogrSU'}/>
                    {blogRoutes}
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
