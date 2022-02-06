import React from 'react';
import "./App.css";
import Hero from './components/Hero';
import Description from './components/Description';
import Services from './components/Services';
import Review from './components/Review';
import Faq from './components/Faq';
import Partners from './components/Partners';

const App = () => {
  return (
    <React.Fragment>
        <Hero />
        <Description />
        <Services />
        <Review />
        <Faq />
        <Partners />
        
    </React.Fragment>
  );
};

export default App;
