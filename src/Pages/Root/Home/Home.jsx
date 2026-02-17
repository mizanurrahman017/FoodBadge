import React from 'react';
import Banner from '../../../Components/Banner/Banner';
import Donations from '../../../Components/Donations/Donations';
import CharityRequests from '../../../Components/CharityRequests/CharityRequests';
import Works from '../../../Components/Works/Works';
import Community from '../../../Components/Community/Community';
import Delivered from '../../../Components/Delivered/Delivered';
import Stories from '../../../Components/Stories/Stories';
import Districts from '../../../Components/Districts/Districts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Donations></Donations>
            <CharityRequests></CharityRequests>
            <Works></Works>
            <Community></Community>
            <Delivered></Delivered>
            <Stories></Stories>
            <Districts></Districts>
        </div>
    );
};

export default Home;