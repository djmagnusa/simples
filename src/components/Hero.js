import React from 'react';
import { Button } from 'semantic-ui-react';
import tower from '../images/tower.png';

const Hero = () => {
  return (
        <div className="container">
            <div className="left">
                
                <div className="big-title">
                    <h3>Simples</h3>
                    <h1><s>Cut the crap</s></h1>
                    <h1>insurance advice</h1>
                    <p>as it should be</p>
                </div>
                
                <ul>
                    <li><p>Beginning with <b className="bold-text">your requirements</b> rather than a product</p></li>
                    <li><p>No sales calls, no spam, <b className="bold-text">no pestering,</b> ever.</p></li>
                    <li><p>Free <b className="bold-text">unbiased</b> consultation for as long as you wish</p></li>
                </ul>
                
                
                <Button className='hero-button'><span className="icon"><i className="fa fa-phone"></i></span>Book a free call</Button>
                
                
            </div>
            
            <div className="right">
                <img src={tower} alt="tower" />
            </div>
        </div>
  );
};

export default Hero;
