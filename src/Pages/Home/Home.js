import React from 'react';
import Banner from './Banner/Banner';
import Facility from './Facility/Facility';
import Services from './Services/Services';
import SortAbout from './SortAbout/SortAbout';

const Home = () => {
    return (
        <div>
            <Banner/>
            <br />
            <Facility/>
            <Services />
            <br />
            <SortAbout></SortAbout>
        </div>
    );
};

export default Home;