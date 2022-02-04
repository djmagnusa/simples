import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import health  from '../images/health.png';
import vehicle from '../images/motor-cycle-insurance.png';
import time from '../images/time.svg';

const healthDescription = [
    'Cover your health related expenses by',
    'picking a comprehensive health plan',
].join(' ')

const lifeDescription = [
    'Protect your loved ones by insuring ',
    'your life with a term plan'
].join('')

const vehicleDescription = [
    'Buy third party liability or ',
    'comprehensive plans'
].join('')

const buttons = (
    <div className="card-button-group">
        <Button primary><span className="icon"><i className="fa fa-phone"></i></span>Book a call</Button>
        <Button primary><span className="icon"><i className="fa fa-whatsapp"></i></span>Whatsapp us</Button><br/>
        <Button primary><span className="icon"><i className="fa fa-wpforms"></i></span>Fill up a 10 sec form</Button>
    </div>
);

const Services = () => {

  return (
    <React.Fragment>
    <div className="col-container">

        <div className="col-item">
            <Card  
                image={health} 
                className="card-item"
                header='Health Insurance'
                description={healthDescription}  
                extra={buttons}
            />
            <div className="services-done">
                <h2>100 clients served</h2>
                <p>Many have already benefitted from our
                unbiased advice and unparalleled
                customer service</p>
            </div>
            
        </div>
        
        <div className="col-item">
            <Card  
                image={time} 
                className="card-item"
                header='Term life Insurance'
                description={lifeDescription} 
                extra={buttons} 
            />

            <div className="services-done">
                <h2>30+ insurance companies</h2>
                <p>We have access to all insurance companies
                in India. We have the ability to deliver what
                you need.</p>
            </div>
            
        </div>

        <div className="col-item">
            <Card  
                image={vehicle} 
                className="card-item"
                header='Car and 2-Wheeler Insurance'
                description={vehicleDescription}
                extra={buttons}  
            />
            
            <div className="services-done">
                <h2>We are bringing back the
                power of buying insurance
                back to the customer.</h2>
            </div>
            
        </div>
       
    </div>

  </React.Fragment>
            
  );
};

export default Services;
