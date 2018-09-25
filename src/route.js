import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './Components/Auth/Auth';
import Home from './Components/Home/Home';
import Adopt from './Components/Adopt/Adopt';
import LocationSearch from './Components/LocationSearch/LocationSearch';
import Catalog from './Components/Catalog/Catalog';
import AdminAdd from './Components/AdminAdd/AdminAdd';
import CatBio from './Components/CatBio/CatBio';
import AdminEdit from './Components/AdminEdit/AdminEdit';
import ApplicationForm from './Components/ApplicationForm/ApplicationForm';
import About from './Components/About/About';
import MeetAzRain from './Components/MeetAzRain/MeetAzRain';
import Contact from './Components/Contact/Contact';
import Testimonials from './Components/Testimonials/Testimonials';
import HelpRain from './Components/HelpRain/HelpRain';
import Donate from './Components/Donate/Donate';
import SponsorAPet from './Components/SponsorAPet/SponsorAPet';

export default (
    <Switch>
        <Route component={Home} exact path="/" />
        {/* probably will delete */}
        {/* <Route component={Adopt} exact path="/adopt" /> */}
        {/* <Route component={LocationSearch} exact path="/adopt/location-search" /> */}
        
        <Route component={Catalog} exact path="/adopt/catalog" />
        {/* secret link for admins only */}
        <Route component={Auth} exact path="/auth" /> 

        <Route component={AdminAdd} exact path="/adopt/adminadd"/>
        <Route component={CatBio} exact path="/adopt/cat_bio/:id" />
        <Route component={AdminEdit} exact path="/catbio/edit/:id"/>
        <Route component={ApplicationForm} exact path="/adopt/application" />

        <Route component={About} exact path="/about" />
        <Route component={MeetAzRain} exact path="/about/meet_az_rain" />
        <Route component={Contact} exact path="/about/contact" />
        <Route component={Testimonials} exact path="/about/testimonials" />

        <Route component={HelpRain} exact path="/help_rain" />
        <Route component={Donate} exact path="/help_rain/donate" />
        <Route component={SponsorAPet} exact path="/help_rain/sponsor_a_pet" />

        

        {/* example of route with id's. idk if i'll use but still */}
        {/* <Route component={Post} exact path="/post/:postid" /> */}
        {/* secret route for admins */}
        {/* <Route component={Form} exact path="/new" /> */}
    </Switch>
)