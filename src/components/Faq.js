import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

export default class Faq extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Accordion className="faq-section">
        <h1>Frequently Asked Questions</h1>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          What is Simples?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>
          Simples helps you make better decisions when buying insurance. 
          That's it. That's all we do.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          But what exactly do you do?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
          We have a host of well-trained advisors who will walk you through any 
          queries you may have and we'll even help you make a purchase. 
          All you have to do is book a call.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          Is it free?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
            Yes, it's free
          </p>
        </Accordion.Content>
      </Accordion>
    )
  }
}
