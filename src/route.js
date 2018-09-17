import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Adopt from './Components/Adopt/Adopt';
import LocationSearch from './Components/LocationSearch/LocationSearch';
import Catalog from './Components/Catalog/Catalog';
import CatBio from './Components/CatBio/CatBio';
import ApplicationForm from './Components/ApplicationForm/ApplicationForm';
import About from './Components/About/About';
import HelpRain from './Components/HelpRain/HelpRain';
import MeetAzRain from './Components/MeetAzRain/MeetAzRain';
import Contact from './Components/Contact/Contact';

export default (
    <Switch>

        <Route component={Home} exact path="/" />
        {/* probably will delete */}
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