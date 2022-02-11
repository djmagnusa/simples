import React from 'react';
import { Button } from 'semantic-ui-react';
import {PopupButton} from 'react-calendly';
import tower from '../images/tower.png';

const Hero = () => {

  const buttonText = () => {
        const text="Book a free call"
        const callButtonText = <React.Fragment><span className="icon"><i className="fa fa-phone"></i></span>{text}</React.Fragment> 
        return callButtonText
  }
  
  return (
        <div className="hero-container">
            <div className="left">
                
                <div className="big-title">
                    <h3>Simples</h3>
                    <h1><s>Cut the crap</s></h1>
                    <h1>insurance advice</h1>
                    <p>as it should be</p>
                </div>
                
                <ul className="hero-ul">
                    <li><p>Beginning with <b className="bold-text">your requirements</b> rather than a product</p></li>
                    <li><p>No sales calls, no spam, <b className="bold-text">no pestering,</b> ever.</p></li>
                    <li><p>Free <b className="bold-text">unbiased</b> consultation for as long as you wish</p></li>
                </ul>
                
                
                <PopupButton url="https://calendly.com/pratush-bh/insurance?month=2022-02" className='ui button hero-button' text={buttonText()}><span className="icon"><i className="fa fa-phone"></i></span></PopupButton>

            </div>
            
            <div className="right">
                <img src={tower} alt="tower" />
            </div>
        </div>

        
  );
};

export default Hero;
