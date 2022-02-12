import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker'
import { Form, Input,Header, Select, Dropdown, Button, Label, Icon, Modal } from 'semantic-ui-react';
import { PopupButton } from 'react-calendly';
import { Checkmark } from 'react-checkmark'
import 'react-datepicker/dist/react-datepicker.css';
// const SendOtp = require('sendotp')

// const sendOtp = new SendOtp('163092AsE2R121Ypa5953ee20');


const familyMemberOptions = [
    { key: 'one', text: '1', value: '1' },
    { key: 'two', text: '2', value: '2' },
    { key: 'three', text: '3', value: '3' },
    { key: 'four', text: '4', value: '4' },
    { key: 'five', text: '5', value: '5' },
    { key: 'six', text: '6', value: '6' },
    { key: 'seven', text: '7', value: '7' },
    { key: 'eight', text: '8', value: '8' },
    { key: 'nine', text: '9', value: '9' },
    { key: 'ten', text:'10', value: '10' },
]

const diseaseOptions = [
  { key: 'diabetes', text: 'Diabetes', value: 'diabetes' },
  { key: 'piles', text: 'Piles', value: 'piles' },
  { key: 'hiv/aids', text: 'HIV/AIDS', value: 'hiv/ads' },
  { key: 'cataract', text: 'Cataract', value: 'cataract' },
  { key: 'covid19', text: 'COVID-19', value: 'covid19' },
  { key: 'cancer', text: 'Cancer', value: 'cancer' },
  { key: 'highbloodpressure', text: 'High Blood Pressure', value: 'highbloodpressure' },
  { key: 'mentalillness', text: 'Mental Illness', value: 'mental illness' },
  { key: 'newbornbabybirthdefects', text: 'Newbord Baby Birth Defects', value: 'newbornbabybirthdefects' },
  { key: 'criticalillnesses', text: 'Critical Illnesses', value: 'criticalillnesses' },
  { key: 'accidentinjury', text: 'Acident Injury', value: 'accidentinjury' },
  { key: 'dengue', text: 'Dengue', value: 'dengue' },
]

// const DOB = () => {
//     return(

//     );
// }

var sixDigitOTP = '';



const HealthButtons = () => {

    const [firstOpen, setFirstOpen] = React.useState(false)
    const [secondOpen, setSecondOpen] = React.useState(false)
    
    //const [items, setItem] = useState([])
    //const [formDisabled, setFormDisabled] = (false)
    const [selectedDate, setSelectedDate] = useState(null)
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const [disabled, setDisabled] = useState(true)
    const [disabledForm, setDisabledForm] = useState(true)
    const [familyCount, setFamilyCount] = useState(0)

    const [user, setUser] = useState({
        mobileNo: "",
        otp: ""
    })

    
    
   /// const items = [<DatePicker />, <DatePicker />,<DatePicker />, <DatePicker />, <DatePicker /> ]
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

    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]: value})
    }

    const sendOTP = (e) => {
           // console.log(user.mobileNo)
          setLoading(true);
          var digits = '0123456789';
          
          for (let i = 0; i < 6; i++ ) {
               sixDigitOTP += digits[Math.floor(Math.random() * 10)];
          }
          
        //   try {
        //     const res = fetch('http://api.msg91.com/api/sendotp.php?authkey=163092AsE2R121Ypa5953ee20&mobile=919968274876&message=Yottol-%20Your%20six%20digit%20OTP%20is%202786.Please%20do%20not%20share%20this%20OTP%20with%20anyone&sender=Yottol&otp=2786', {
        //       method: "GET",
        //       headers: {
        //           "Content-Type": "application/json"
        //       }
        //     })

        //     const data = res.json();
        //     console.log(data);
          
        //   } catch(error){
        //       console.log(error)
        //   }
        try{
            var wnd = window.open(`http://api.msg91.com/api/sendotp.php?authkey=163092AsE2R121Ypa5953ee20&mobile=91${user.mobileNo}&message=Yottol-%20Your%20six%20digit%20OTP%20is%20${sixDigitOTP}.Please%20do%20not%20share%20this%20OTP%20with%20anyone&sender=Yottol&otp=${sixDigitOTP}`);
            setTimeout(
            function()
            {
                wnd.close();
            },
            100
            );
            setDisabled(false)
        } catch(err) {
            console.log(err)
        }
        setLoading(false)  

        console.log(sixDigitOTP)

        
    }
    console.log(sixDigitOTP)



    var dobFields = [];
    const handleDropDownSelect = (event, data) => {
        //console.log(data.value)
        dobFields = []
        
        
        setFamilyCount(data.value)
        

        console.log(dobFields);
       
    }

    for(let i=0;i<familyCount;i++){
        // {
        //     // var node = document.querySelector(".family-members")
        //     // var ele = document.createElement("input");
        //     // ele.className = "ui input";
        //     // ele.innerHTML = "some text";
        //     // node.parentNode.insertBefore(ele, node.nextSibling);
        //     // setUsers(...users, <User />)
        //     // items.push(<User id={i} />)      
            
            dobFields.push(<DatePicker key={i} selected={selectedDate} onChange={date => setSelectedDate(date)} />)        
            
        }

    const confirmOTP = (event, data) => {
        console.log(sixDigitOTP)
        console.log(user.otp)
        if( sixDigitOTP === user.otp)
        {
            setDisabledForm(false)
        } else{

        }
    }

    // for (let i = 0; i < numberOfFamilyMembers; ++i) {
    //     items.push(<p>Hello</p>)
    //   }
    
    
    return (
        <div className="card-button-group">
            <PopupButton url="https://calendly.com/pratush-bh/insurance?month=2022-02" className='ui button primary' text={buttonText()} primary><span className="icon"><i className="fa fa-phone"></i></span>Book a call</PopupButton>
            <Button onClick={onWhatsappClick} primary><span className="icon"><i className="fa fa-whatsapp"></i></span>Whatsapp us</Button><br/>
            <Button onClick={() => setFirstOpen(true)} primary><span className="icon"><i className="fa fa-wpforms"></i></span>Fill up a 10 sec form</Button>

            <Modal
                closeIcon
                open={firstOpen}
                onClose={() => setFirstOpen(false)}
                onOpen={() => setFirstOpen(true)}
            >
            <Header content='Health insurance' />
            <Modal.Content>
                    <Form>
                        <Form.Group widths='1'>
                        <Form.Field
                            id='form-input-control-first-name'
                            control={Input}
                            label='Mobile number'
                            name="mobileNo"
                            value={user.mobileNo}
                            onChange={handleInputs}
                            placeholder='Mobile No'
                            type='number'
                            required
                        />                        

                        <Form.Field
                            id='form-input-control-otp'
                            control={Input}
                            label='OTP'
                            placeholder='Enter OTP'
                            name="otp"
                            value={user.otp}
                            onChange={handleInputs}
                            disabled={disabled}
                            type='number'
                            required
                        />

                        <Form.Field className="button-formfield">
                            <Button onClick={confirmOTP} disabled={disabled}>Confirm</Button>
                        </Form.Field>

                        
                        </Form.Group>

                        <Form.Group>
                            <Form.Field>
                                <Button onClick={sendOTP} loading={loading}>Send OTP</Button>      
                            </Form.Field>
                            
                        </Form.Group>
                        
             
                        <Form.Field
                            control={Select}
                            options={familyMemberOptions}
                            label={{ children: 'Number of family members', htmlFor: 'form-select-family-members'}}
                            placeholder='No. of family members'
                            search
                            searchInput={{ id: 'form-select-family-mmembers' }}
                            className="family-members"
                            onChange={handleDropDownSelect}
                            value={familyCount}
                            disabled={disabledForm}

                            required
                         />

                        <div className="family-dob">
                            
                            {console.log({dobFields})}
                            <ul>

                               {dobFields.map((item, index) => (
                                   <li className="dob-item" key={index}><label className="disease-label">DOB of family member {index+1} : </label>{item}</li>
                               ))}
                            </ul>
                        </div>        

                      
                        <Form.Field>
                            {disabledForm === false &&  <label>Pre-exesting health issues</label>}
                            <Dropdown
                                placeholder='Pre-exesting health issues'
                                fluid
                                multiple
                                search
                                selection
                                options={diseaseOptions}
                                disabled={disabledForm}
                            />

                        </Form.Field>
                        
                         
                </Form>
            </Modal.Content>
            <Modal.Actions position="left">
                <Form.Field
                    id='form-button-control-public'
                    control={Button}
                    content='Submit'
                    onClick={() => setSecondOpen(true)}
                />
            </Modal.Actions>

            <Modal
                onClose={() => setSecondOpen(false)}
                open={secondOpen}
                size='small'
            >
            <Modal.Header>Thank you</Modal.Header>
            <Modal.Content>
                    <div>
                        <Checkmark size='96px' />
                    </div>
                    
                    <div className="thanks-message">
                        <p>Thank you for reaching out to us. We will get in touch with you in the next <span className="emphasize-text">3 hours.</span></p><br />

                        <p>To maintain your confidentiality, we have not asked for your name, and your mobile number will be protected. </p><br />
                        
                       <p><Icon name='bullhorn'></Icon>You will never recieve spam calls from our side at any point of time. </p>
                    </div>
                    
                </Modal.Content>
                <Modal.Actions>
                    <Button
                    icon='check'
                    content='All Done'
                    onClick={() => setSecondOpen(false)}
                    />
                </Modal.Actions>
                </Modal>
          </Modal>
        </div>
    );
}

export default HealthButtons;

