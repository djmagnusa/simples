import React, { Component } from "react";
import Slider from "react-slick";

export default class TopSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="blk-prd featurebox">
        <Slider className="container featurebanner" {...settings}>
         
            <div>
                <a onclick="javascript:GA360EventPage('carousel-featurebanner','Save tax','');" href="https://investmentlife.policybazaar.com/savetax?utm_content=home_v10" target="_blank">
                    <article class="investment-plans prd-bg">
                        <div class="block-data">
                            <div class="left-container">
                                <span class="float-icon investment-plan"></span>
                                <span class="icon icon-bg investment-plans"></span>
                                <p class="head">Investment Plans</p>
                                
                                <div>
                                    <p class="copy invfundData">
                                        <span>Save Tax</span> upto &#8377;46,800<br/> under  Sec 80C &<br/><span>No Tax on Returns*</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>
                </a>
            </div>

            <div>
                <a onclick="javascript:GA360EventPage('carousel-featurebanner','Health Insurance','');" href="https://health.policybazaar.com/?offerid=37&utm_content=v10" target="_blank">
                    <article class="health-insurance prd-bg">
                            <div class="block-data">
                                <div class="left-container">
                                    <span class="float-icon health-insurance"></span>
                                    <span class="icon icon-bg"></span>
                                    <p class="head">Health Insurance</p>
                                    
                                    <div>
                                        <p class="copy">Save Tax<br/><span class="large-text">upto ₹75,000</span><br/> under sec 80D</p>
                                    </div>
                                </div>
                            </div>
                    </article>
                </a>
            </div>

            <div>
                <a onclick="javascript:GA360EventPage('carousel-featurebanner','Home Insurance','');" href="https://www.policybazaar.com/home-insurance/" target="_blank">
                    <article class="home-insurance prd-bg">
                        <div class="block-data">
                            <div class="left-container">
                                <span class="float-icon home-insurance"></span>
                                <span class="icon icon-bg home-insurance"></span>
                                <p class="head">Home Insurance</p>
                            
                                <div>
                                    <p class="copy"><span>₹ 50L</span>  cover for your home<br/> & <span>₹ 20L</span> cover for household goods @ just <span>₹123/month</span></p>
                                </div>
                            </div>
                        </div>
                    </article>
                </a>
            </div>


            <div>
                <a onclick="javascript:GA360EventPage('carousel-featurebanner','askpb','');" href="https://www.policybazaar.com/askpb/" target="_blank">
                    <article class="pbaskci prd-bg">
                        <div class="block-data">
                            <div class="left-container">
                                <span class="float-icon askpb-insurance"></span>
                                <span class="icon icon-bg pbaskci"></span>
                                <p class="head">AskPB</p>
                            
                                <div>  
                                    <p class="copy">Got a <span>question <br/> about insurance?</span><br/> Write to us</p>
                                </div>
                            </div>
                        </div>
                    </article>
                </a>                
            </div>
        </Slider>
      </div>
    );
  }
}