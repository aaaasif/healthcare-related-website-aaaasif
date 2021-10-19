import React from 'react';
import Banner from '../Banner/Banner';
import Facility from '../Facility/Facility';
// import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <br /> <br /> <br />
            <Banner></Banner>
            <Facility></Facility>
        </div>
    );
};

export default Home;