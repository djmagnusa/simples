import React from 'react'
import { Button } from 'semantic-ui-react';
import { PopupButton } from 'react-calendly';

const VehicleButtons = () => {
  
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
    
    return (
        <div className="card-button-group">
            <PopupButton url="https://calendly.com/pratush-bh/insurance?month=2022-02" className='ui button primary' text={buttonText()} primary><span className="icon"><i className="fa fa-phone"></i></span>Book a call</PopupButton>
            <Button onClick={onWhatsappClick} primary><span className="icon"><i className="fa fa-whatsapp"></i></span>Whatsapp us</Button><br/>
            <Button primary><span className="icon"><i className="fa fa-wpforms"></i></span>Fill up a 10 sec form</Button>
        </div>
    );
}

export default VehicleButtons;

