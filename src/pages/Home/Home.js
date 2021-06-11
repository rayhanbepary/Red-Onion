import React from 'react';
import Choose from '../../components/Choose/Choose';
import Dish from '../../components/Dish/Dish';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import Navbar from '../../components/Navbar/Navbar';

const Home = ({ cart }) => {

    return (
        <React.Fragment>
            <Navbar cart={cart}></Navbar>
            <Hero></Hero>
            <Dish></Dish>
            <Choose></Choose>
            <Footer></Footer>
        </React.Fragment>
    );
};

export default Home;