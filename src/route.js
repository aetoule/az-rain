import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './component/Home/Home';
import Adopt from './component/Adopt/Adopt';
import LocationSearch from './Components/LocationSearch/LocationSearch';
import Catalog from './Components/Catalog';
import CatBio from './component/CatBio/CatBio';
import ApplicationForm from './component/ApplicationForm/ApplicationForm';
import About from './component/About/About';
import HelpRain from './component/HelpRain/HelpRain';
import MeetAzRain from './component/MeetAzRain/MeetAzRain';
import Contact from './component/Contact/Contact';

export default (
    <Switch>
        <Route component={Home} exact path="/" />

        <Route component={Adopt} exact path="/adopt" />
        <Route component={LocationSearch} exact path="/adopt/location-search" />
        <Route component={Catalog} exact path="/adopt/catalog" />
        <Route component={CatBio} exact path="/adopt/cat_bio" />
        <Route component={ApplicationForm} exact path="/adopt/application" />

        <Route component={About} exact path="/about" />

        <Route component={HelpRain} exact path="/help_rain" />
        <Route component={MeetAzRain} exact path="/help_rain/meet_az_rain" />
        <Route component={Contact} exact path="/help_rain/contact" />

        {/* example of route with id's. idk if i'll use but still */}
        {/* <Route component={Post} exact path="/post/:postid" /> */}
        {/* secret route for admins */}
        {/* <Route component={Form} exact path="/new" /> */}
    </Switch>
)