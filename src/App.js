import React from 'react';
import "./App.css";
import Hero from './components/Hero';
import Description from './components/Description';
import Services from './components/Services';


const App = () => {
  return (
    <React.Fragment>
        <Hero />
        <Description />
        <Services />
    </React.Fragment>
  );
};

export default App;
