import React from 'react';
import Banner from '../Banner/Banner';
import Facility from '../Facility/Facility';
// import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <br />
            <Banner></Banner>
            <Facility></Facility>
            <Services></Services>
        </div>
    );
};

export default Home;