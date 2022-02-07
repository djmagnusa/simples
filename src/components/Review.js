import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const reviewContent = [
  'Simple, Easy and Reliable! Simples helped me narrow down',
  'my choices effortlessly. The entire process was fuss free,',
  'what I needed was always kept on priority while giving me',
  'options without pushing anything. Absolutely love this',
  'platform.'
].join(' ')

const items = [
    {
      header: '45',
      description:
        'Top insurance Advisors no standby to answer your queries',      
    },
    {
      header: '50,000+',
      description:
        "People have sought Simple's advice before making their insurance purchase",
    },
]

const Review = () => {
    return (
        <React.Fragment>    
            <div className="feedback-wrapper">
                <div className="review-container">

                    <Card className="review-card">
                        <Card.Content description={reviewContent} />
                        <Card.Content extra className="customer-details">
                            <div>
                                <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' avatar />
                            </div>

                            <div className="customer-details">
                                <b>Avni Jha</b><br/><span className="designation">Associate Consultant</span>
                            </div>
                            
                        </Card.Content>
                    </Card>
                </div>

                <div className="stats">
                     <Card.Group items={items} className="stats-cards" />
                </div>
            
            </div>
            
        </React.Fragment>
    );
};
  
export default Review