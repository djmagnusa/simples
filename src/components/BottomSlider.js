import React, { Component } from "react";
import Slider from "react-slick";
import pbaskci from '../images/pbaskci_banner_1.png';
import banner247 from '../images/banner247.png';
import beware from '../images/beware-of-fraudsters.png';
import taxBanner from '../images/taxBanner.png';
import madeInIndia from '../images/made-in-india-banner.png';
import saveTax from '../images/save-tax-on-health-insurance.png';
import appkisidehai from '../images/appkisidehai-banner.png';

export default class BottomSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
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
      <div className="home-banner">
        <Slider className="container" {...settings}>
         
            <div>
                 <a onclick="javascript:GA360EventPage('carousel-banner','askpb','');" href="https://www.policybazaar.com/askpb/" target="_blank" tabindex="-1">
                    <img data-src="https://static.pbcdn.in/cdn/images/home-v1/pbaskci_banner_1.png" class="lazy" src={pbaskci} />
                 </a>
            </div>

            <div>
                 <img src={madeInIndia} loading="lazy" />
            </div>

            <div>
                <a onclick="javascript:GA360EventPage('carousel-banner','Fraud Identification','');" href="https://www.policybazaar.com/fraud-identification/" target="_blank" tabindex="-1">
                  <img data-src="https://static.pbcdn.in/cdn/images/home-v1/beware-of-fraudsters.png" class="lazy" src={beware} />
                </a>
            </div>


            <div>
                 <a onclick="javascript:GA360EventPage('carousel-banner','investment-tax-saving','');" href="https://investmentlife.policybazaar.com/savetax?utm_content=home_v10" target="_blank" tabindex="0">
                    <img data-src="https://static.pbcdn.in/cdn/images/home-v1/tax-banner.png" class="lazy" src={taxBanner} />
                 </a>
            </div>

            <div>
                 <a onclick="javascript:GA360EventPage('carousel-banner','health-tax-saving','');" href="https://health.policybazaar.com/?offerid=37&amp;utm_content=v10" target="_blank" tabindex="0">
                    <img data-src="https://static.pbcdn.in/cdn/images/home/save-tax-on-health-insurance.png" class="lazy" src={saveTax} />
                 </a>
            </div>

            <div>
                <a onclick="javascript:GA360EventPage('carousel-banner','claim','');" href="https://www.policybazaar.com/claim/" target="_blank" tabindex="0">
                    <img data-src="https://static.pbcdn.in/cdn/images/home-v1/banner-24x7.png" class="lazy" src={banner247} />
                </a>
            </div>

            <div>
                <a onclick="javascript:GA360EventPage('carousel-banner','Aapkiside','');" href="https://www.policybazaar.com/pblife/whats-new/AapKiSideHai-Policybazaar-Unveils-New-Brand-Campaign-On-IPL-22/?pb_campaign=aapkisidehai" target="_blank" tabindex="-1">
                    <img data-src={appkisidehai} class="lazy" src={appkisidehai} />
                </a>
            </div>

          
           
        </Slider>
      </div>
    );
  }
}