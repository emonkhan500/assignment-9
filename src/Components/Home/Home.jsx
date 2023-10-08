import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Services from '../services/Services';
import Offer from '../Offer/Offer';
import Find from '../Find/Find';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            
         <Services></Services>
         <Offer></Offer>
         <Find></Find>
            <Footer></Footer>
        </div>
    );
};

export default Home;