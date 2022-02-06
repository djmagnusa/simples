import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
import Accordion from './Accordion';

const Faq = () => {
  const accordionData = [
    {
      title: 'What is Simples?',
      content: `Simples helps you make better descisions when buying insurance. 
      That's it. That's all we do.`
    },
    {
      title: 'But what exactly do you do?',
      content: `We have a host of well-trained advisors who will walk you through any queries you may have and we'll even help you make a purchase. 
      All you have to do is book a call.`
    },
    {
      title: 'Is it free?',
      content: `Yes, it's free.`
    }
  ];

  return (
    <div className="faq-section">
      <h1>Frequently Asked Questions</h1>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  )
}

export default Faq;

