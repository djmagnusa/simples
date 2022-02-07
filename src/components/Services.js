import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import { PopupButton } from 'react-calendly';
import health  from '../images/health.png';
import vehicle from '../images/motor-cycle-insurance.png';
import time from '../images/time.png';

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

const onWhatsappClick= (e) => {
    // const nameOfClass= 
    // console.log(e.target.getAttribute('class'))
    // const insuranceType = document.querySelector("div.header").innerText;
    // console.log(insuranceType)
    window.location.href="https://wa.me/9108160080658?text=I'm%20interested%20in%20your%20insurance%20schemes";
}

const buttonText = () => {
    const text="Book a call"
    const callButtonText = <React.Fragment><span className="icon"><i className="fa fa-phone"></i></span>{text}</React.Fragment> 
    return callButtonText
}

const buttons = (
    <div className="card-button-group">
        <PopupButton url="https://calendly.com/pratush-bh/insurance?month=2022-02" className='ui button primary' text={buttonText()} primary><span className="icon"><i className="fa fa-phone"></i></span>Book a call</PopupButton>
        <Button onClick={onWhatsappClick} primary><span className="icon"><i className="fa fa-whatsapp"></i></span>Whatsapp us</Button><br/>
        <Button primary><span className="icon"><i className="fa fa-wpforms"></i></span>Fill up a 10 sec form</Button>
    </div>
);

const Services = () => {

  return (
    <React.Fragment>
    <div className="col-container">

        <div className="col-item" data-aos="fade-right">
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
        
        <div className="col-item" data-aos="fade-right">
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

        <div className="col-item" data-aos="fade-right">
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
