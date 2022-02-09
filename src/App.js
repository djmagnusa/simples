import React from 'react';
import "./App.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Hero from './components/Hero';
import Description from './components/Description';
import Services from './components/Services';
import Review from './components/Review';
import BestPlace from './components/BestPlace';
import Faq from './components/Faq';
import Partners from './components/Partners';
import TopSlider from './components/TopSlider';
import BottomSlider from './components/BottomSlider';

const App = () => {
  return (
    <React.Fragment>
        <Hero />
        <Description />
        <Services />
        <Review />
        <TopSlider />
        <BestPlace />
        <Faq />
        <Partners />
        
    </React.Fragment>
  );
};

export default App;
