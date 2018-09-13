import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './component/Home/Home';
import Adopt from './component/Adopt/Adopt';
import About from './component/About/About';
import HelpRain from './component/HelpRain/HelpRain';
import Post from './component/Post/Post';

// TODO: fix routes
export default (
    <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Adopt} exact path="/adopt" />
        <Route component={About} exact path="/about" />
        <Route component={HelpRain} exact path="/helprain" />
        {/* example of route with id's. idk if i'll use but still */}
        {/* <Route component={Post} exact path="/post/:postid" /> */}
        {/* secret route for admins */}
        {/* <Route component={Form} exact path="/new" /> */}
    </Switch>
)