import React from 'react';
import Banner from './Banner/Banner';
import Facility from './Facility/Facility';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner/>
            <br />
            <Facility/>
            <Services />
        </div>
    );
};

export default Home;