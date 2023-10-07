import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Services from '../services/Services';
import Offer from '../Offer/Offer';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
         <Services></Services>
         <Offer></Offer>
            <Footer></Footer>
        </div>
    );
};

export default Home;