import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppoinmentBanner from '../AppoinmentBanner/AppoinmentBanner';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Feature from '../Feature/Feature';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <Feature></Feature>
            <AppoinmentBanner></AppoinmentBanner>
            <Testimonial></Testimonial>
            <Contact></Contact>

        </div>
    );
};

export default Home;