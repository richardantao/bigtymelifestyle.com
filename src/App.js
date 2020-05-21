import React from "react";

import { Switch, Route } from "react-router-dom";

import Loadable from "react-loadable";
import Loading from "./components/atoms/Loading";

import ErrorBoundary from "./components/pages/ErrorBoundary.js"

import "./App.scss";

const App = () => {
  return (
    <ErrorBoundary>
      <Switch>
        {/* <Route path="/about" component={About}/> */}
        {/* <Route path="/blog" component={Blog}/> */}
        {/* <Route path="/blog/:id" component={Post}/> */}
        {/* <Route path="/contact" component={Contact}/> */}
        {/* <Route path="/gallery" component={Gallery}/> */}
        {/* <Route path="/news" component={News}/> */}
        {/* <Route path="/store" component={Store}/> */}
        <Route exact path="/" component={Home}/>
        <Route path="*" component={NotFound}/>
      </Switch>
    </ErrorBoundary>
  );
};

const About = Loadable({
  loader: () => import(/* webpackChunkName: About */ "./components/pages/About"),
  loading: Loading,
  delay: 500
});

const Blog = Loadable({
  loader: () => import(/* webpackChunkName: Blog */ "./components/pages/Blog"),
  loading: Loading,
  delay: 500
});

const Contact = Loadable({
  loader: () => import(/* webpackChunkName: Contact */ "./components/pages/Contact"),
  loading: Loading,
  delay: 500
});

const Gallery = Loadable({
  loader: () => import(/* webpackChunkName: Gallery */ "./components/pages/Gallery"),
  loading: Loading,
  delay: 500
});

const Home = Loadable({
  loader: () => import(/* webpackChunkName: Home */ "./components/pages/Home"),
  loading: Loading,
  delay: 500
});

const News = Loadable({
  loader: () => import(/* webpackChunkName: News */ "./components/pages/News"),
  loading: Loading,
  delay: 500
});

const NotFound = Loadable({
  loader: () => import(/* webpackChunkName: NotFound */ "./components/pages/NotFound"),
  loading: Loading,
  delay: 500
});

const Post = Loadable({
  loader: () => import(/* webpackChunkName: Post */ "./components/pages/Post"),
  loading: Loading,
  delay: 500
});

const Store = Loadable({
  loader: () => import(/* webpackChunkName: Store */ "./components/pages/Store"),
  loading: Loading,
  delay: 500
});

export default App;